import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../main";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../filter.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // Random experiences array
  const experiences = ['5+ years', '10+ years', '15+ years', '20+ years', '25+ years'];

  // Filter state variables
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  // Function to randomly assign experience and save to local storage
  const assignExperiences = (doctors) => {
    let doctorsWithExperience = JSON.parse(localStorage.getItem('doctorsExperience'));

    // If experiences are not stored in local storage, assign them
    if (!doctorsWithExperience) {
      doctorsWithExperience = doctors.map(doctor => ({
        ...doctor,
        experience: experiences[Math.floor(Math.random() * experiences.length)] // Random experience
      }));

      // Save to local storage
      localStorage.setItem('doctorsExperience', JSON.stringify(doctorsWithExperience));
    }

    return doctorsWithExperience;
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );

        // Assign experiences and set to state
        const doctorsWithExperience = assignExperiences(data.doctors);
        setDoctors(doctorsWithExperience);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    // Clear local storage on logout (optional)
    localStorage.removeItem('doctorsExperience');
    return <Navigate to={"/login"} />;
  }

  // Filter doctors based on selected department, gender, and experience
  const filteredDoctors = doctors.filter(doctor => {
    return (
      (selectedDepartment === 'All' || doctor.doctorDepartment === selectedDepartment) &&
      (selectedGender === 'All' || doctor.gender === selectedGender) &&
      (selectedExperience === 'All' || doctor.experience === selectedExperience)
    );
  });

  return (
    <>
      <section className='page doctors'>
        <h1>Meet Our Expert Team - Care404</h1>

        {/* Filter Section */}
        <div className="filters">
          <div>
            <label>Filter by Department: </label>
            <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
              <option value="All">All</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Oncology">Oncology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Pulmonology">Pulmonology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Radiology">Radiology</option>
              <option value="Physical Therapy">Physical Therapy</option>
              <option value="ENT">ENT</option>
              <option value="Urology">Urology</option>
              <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
              <option value="Anesthesiology">Anesthesiology</option>
              <option value="Ophthalmology">Ophthalmology</option>
            </select>

          </div>

          <div>
            <label>Filter by Gender: </label>
            <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Filter by Experience: </label>
            <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
              <option value="All">All</option>
              {experiences.map((exp, index) => (
                <option key={index} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctors List */}
        <div className="banner">
          {
            filteredDoctors && filteredDoctors.length > 0 ? (
              filteredDoctors.map((element) => {
                return (
                  <div className="card" key={element._id}>
                    <img src={element.docAvatar && element.docAvatar.url} alt="Doctor's Avatar" />
                    <h4>{`${element.firstName} ${element.lastName}`}</h4>
                    <div className="details">
                      <p>Email: <span>{element.email}</span></p>
                      <p>Phone: <span>{element.phone}</span></p>
                      <p>Department: <span>{element.doctorDepartment}</span></p>
                      <p>Date of Birth: <span>{element.dob.substring(0, 10)}</span></p>
                      <p>Gender: <span>{element.gender}</span></p>
                      <p>Experience: <span>{element.experience}</span></p> {/* Experience persisted */}
                    </div>
                  </div>
                );
              })
            ) : <h2>No Doctors Available at the Moment</h2>
          }
        </div>
      </section>
    </>
  );
}

export default Doctors;
