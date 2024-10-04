import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from "../main"
import { toast } from 'react-toastify';
import axios from 'axios';

const AddNewAdmin = () => {

  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleAddNewAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addnew",
        { firstName, lastName, email, phone, NIC, dob, gender, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );
      toast.success(response.data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }


  return (
    <>

      <section className="page">

        <div className='container form-component add-admin-form'>
          <img src="/logo1.png" alt="Care404" className='logo' />
          <h1 className='form-title'>Empower Your Team: <strong style={{ fontSize: '33px', color: '#e74c3c', fontStyle: 'italic', fontFamily: 'Papyrus, fantasy' }}>Add a New Admin</strong></h1>
          <p><strong>Warning:</strong> Ensure all details are correct before adding a new admin. Unauthorized changes may affect system integrity.</p>
          <form onSubmit={handleAddNewAdmin}>
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

            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type='submit'>Resgiter with Care404</button>
            </div>
          </form>
        </div>



      </section>




    </>
  )
}

export default AddNewAdmin
