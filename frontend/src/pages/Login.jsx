// import React, { useContext, useState } from 'react';
// import { Context } from '../main';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");

//   const navigateTo = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post(
//             "http://localhost:4000/api/v1/user/login",
//             { email, password, otp, role: "Patient" },
//             {
//                 withCredentials: true,
//                 headers: { "Content-Type": "application/json" }
//             }
//         );
//         toast.success(response.data.message);
//         setIsAuthenticated(true);
//         navigateTo("/");
//     } catch (error) {
//         toast.error(error.response.data.message);
//     }
// };

//   if (isAuthenticated) {
//     return <Navigate to={"/"} />;
//   }

//   return (
//     <div className='container form-component login-form'>
//       <h2>Login to Care404</h2>
//       <p>Access your personalized healthcare dashboard. Secure and streamlined—your health, your control.</p>
//       <p>Stay connected with your medical team and manage appointments with ease.</p>
//       <form onSubmit={handleLogin}>
//         <input 
//           type="text" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder='Email' 
//         />
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder='Password' 
//         />
//         <input 
//           type="text" 
//           value={otp} 
//           onChange={(e) => setOtp(e.target.value)} 
//           placeholder='Enter OTP' 
//         />
//         <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
//           <p style={{ marginBottom: 0 }}>
//             New to Care404? Complete your registration to access your Health Dashboard.
//           </p>
//           <Link to={"/register"} style={{ textDecoration: "none", alignItems: "center" }}>
//             Care404! Sign Up Here
//           </Link>
//         </div>
//         <div style={{ justifyContent: "center", alignItems: "center" }}>
//           <button type='submit'>LogIn</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
// // import React, { useContext, useState } from 'react';
// // import { Context } from '../main';
// // import { Link, Navigate, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {
// //   const { isAuthenticated, setIsAuthenticated } = useContext(Context);

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [otpSent, setOtpSent] = useState(false);

// //   const navigateTo = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:4000/api/v1/user/login",
// //         { email, password },
// //         {
// //           withCredentials: true,
// //           headers: { "Content-Type": "application/json" }
// //         }
// //       );
// //       toast.success(response.data.message);
// //       setOtpSent(true);
// //     } catch (error) {
// //       toast.error(error.response.data.message);
// //     }
// //   };

// //   const handleVerifyOtp = async (e) => {
// //     e.preventDefault();
// //     try {
// //         const response = await axios.post(
// //             "http://localhost:4000/api/v1/user/verify-otp",
// //             { email, otp },
// //             {
// //                 withCredentials: true,
// //                 headers: { "Content-Type": "application/json" }
// //             }
// //         );
// //         toast.success(response.data.message);
// //         setIsAuthenticated(true);
// //         localStorage.setItem('token', response.data.token); // Save token
// //         navigateTo("/"); // Redirect to home or dashboard
// //     } catch (error) {
// //         toast.error(error.response.data.message);
// //     }
// // };


// //   if (isAuthenticated) {
// //     return <Navigate to={"/"} />;
// //   }

// //   return (
// //     <div className='container form-component login-form'>
// //       <h2>Login to Care404</h2>
// //       <p>Access your personalized healthcare dashboard. Secure and streamlined—your health, your control.</p>
// //       <p>Stay connected with your medical team and manage appointments with ease.</p>
// //       {otpSent ? (
// //         <form onSubmit={handleVerifyOtp}>
// //           <input 
// //             type="text" 
// //             value={otp} 
// //             onChange={(e) => setOtp(e.target.value)} 
// //             placeholder='Enter OTP' 
// //           />
// //           <div style={{ justifyContent: "center", alignItems: "center" }}>
// //             <button type='submit'>Verify OTP</button>
// //           </div>
// //         </form>
// //       ) : (
// //         <form onSubmit={handleLogin}>
// //           <input 
// //             type="text" 
// //             value={email} 
// //             onChange={(e) => setEmail(e.target.value)} 
// //             placeholder='Email' 
// //           />
// //           <input 
// //             type="password" 
// //             value={password} 
// //             onChange={(e) => setPassword(e.target.value)} 
// //             placeholder='Password' 
// //           />
// //           <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
// //             <p style={{ marginBottom: 0 }}>
// //               New to Care404? Complete your registration to access your Health Dashboard.
// //             </p>
// //             <Link to={"/register"} style={{ textDecoration: "none", alignItems: "center" }}>
// //               Care404! Sign Up Here
// //             </Link>
// //           </div>
// //           <div style={{ justifyContent: "center", alignItems: "center" }}>
// //             <button type='submit'>LogIn</button>
// //           </div>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // export default Login;

import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role: "Patient" },
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

  return <div className='container form-component login-form'>
    <h2>Login to Care404</h2>
    <p>Access your personalized healthcare dashboard. Secure and streamlined—your health, your control.</p>
    <p>Stay connected with your medical team and manage appointments with ease.</p>
    <form onSubmit={handleLogin}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
      <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
        <p style={{ marginBottom: 0 }}>New to Care404? Complete your registration to access your Health Dashboard.</p>
        <Link to={"/register"} style={{ textDecoration: "none", alignItems: "center" }}>Care404! Sign Up Here</Link>
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <button type='submit'>LogIn</button>
      </div>
    </form>
  </div>;
};

export default Login;
