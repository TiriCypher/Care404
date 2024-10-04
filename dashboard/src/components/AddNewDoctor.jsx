import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from "../main"
import { toast } from 'react-toastify';
import axios from 'axios';

const AddNewDoctor = () => {

  const { isAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    }
  }



  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("NIC", NIC);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);


      const response = await axios.post(
        "http://localhost:4000/api/v1/user/doctor/addnew",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
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

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Gastroenterology",
    "Pulmonology",
    "Dermatology",
    "Endocrinology",
    "Psychiatry",
    "Radiology",
    "Physical Therapy",
    "ENT",
    "Urology",
    "Obstetrics & Gynecology",
    "Anesthesiology",
    "Ophthalmology"
  ];

  return (
    <>

      <section className="page">

        <div className='container form-component add-doctor-form'>
          <img src="/logo1.png" alt="Care404" className='logo' />
          <h1 className='form-title'><strong style={{ fontSize: '33px', color: '#e74c3c', fontStyle: 'italic', fontFamily: 'Papyrus, fantasy' }}>Register a New Doctor</strong></h1>
          <p><strong>Warning:</strong> Ensure all details are correct before adding a new Doctor. Unauthorized changes may affect system integrity.</p>
          <form onSubmit={handleAddNewDoctor}>

            <div className="first-wrapper">
              <div>
                <img src={docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.png"} alt="Doctor Avatar" />
                <input type="file" onChange={handleAvatar} />
              </div>
              <div>
                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="number" placeholder='NIC' value={NIC} onChange={(e) => setNic(e.target.value)} />
                <input type="date" placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <select value={doctorDepartment} onChange={(e) => setDoctorDepartment(e.target.value)}>
                  <option value="">Select Department</option>
                  {departmentsArray.map((department, index) => (
                    <option key={index} value={department}>{department}</option>
                  ))}
                </select>
                <button type='submit'>Resgiter with Care404</button>
              </div>
            </div>



          </form>
        </div>



      </section>




    </>
  )
}

export default AddNewDoctor
