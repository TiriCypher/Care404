import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  useEffect(() => {
    // Add 'no-scroll' class to body
    document.body.classList.add('no-scroll');

    // Prevent scroll events from working
    const preventScroll = (e) => {
      e.preventDefault();
    };
    window.addEventListener('scroll', preventScroll);
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Clean up the event listeners and class when the component is unmounted
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }



  return (
    <>


      <div className='container form-component'>
        <img src="/logo1.png" alt="Care404" className='logo' />
        <h1 className='form-title'>WELCOME TO CARE404</h1>
        <p className='form-subtitle'> Sign in to access the Admin Dashboard. <br />
          <strong>Warning:</strong> Authorized personnel only. Unauthorized access is prohibited.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type='submit'>ADMIN LogIn</button>
          </div>
        </form>
      </div>;


    </>
  )
}

export default Login
