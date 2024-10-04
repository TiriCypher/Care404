import React, { useContext, useState } from 'react';
import { Context } from '../main';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        { firstName, lastName, email, phone, NIC, dob, gender, password, role: "Patient" },
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


  return <div className='container form-component register-form'>
    <h2>Register for Care404: Your Health, Your Control</h2>
    <p>Please sign up to continue and gain access to your personalized healthcare dashboard.</p>
    <p>Join Care404 today and take control of your health journey with our secure and streamlined platform.</p>
    <form onSubmit={handleRegister}>
      <div>
        <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <input type="number" placeholder='NIC' value={NIC} onChange={(e) => setNic(e.target.value)} />
        <input type="date" placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
        <p style={{ marginBottom: 0 }}>Already have an account?</p>
        <Link to={"/login"} style={{ textDecoration: "none", alignItems: "center" }}>Log In to Care404</Link>
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <button type='submit'>Resgiter with Care404</button>
      </div>
    </form>
  </div>
};

export default Register;
