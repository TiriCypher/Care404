// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const AppointmentForm = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [NIC, setNic] = useState("");
//     const [dob, setDob] = useState("");
//     const [gender, setGender] = useState("");
//     const [appointmentDate, setAppointmentDate] = useState("");
//     const [department, setDepartment] = useState("");
//     const [doctorFirstName, setDoctorFirstName] = useState("");
//     const [doctorLastName, setDoctorLastName] = useState("");
//     const [address, setAddress] = useState("");
//     const [hasVisited, setHasVisited] = useState("");

//     const departmentsArray = [
//         "Pediatrics",
//         "Orthopedics",
//         "Cardiology",
//         "Neurology",
//         "Oncology",
//         "Gastroenterology",
//         "Pulmonology",
//         "Dermatology",
//         "Endocrinology",
//         "Psychiatry",
//         "Radiology",
//         "Physical Therapy",
//         "ENT",
//         "Urology",
//         "Obstetrics & Gynecology",
//         "Anesthesiology",
//         "Toxicology"
//     ];


//     const [doctors, setDoctors] = useState([]);
//     useEffect(() => {
//         const fetchDoctors = async () => {
//             const { data } = await axios.get(
//                 "http://localhost:4000/api/v1/user/doctors",
//                 { withCredentials: true }
//             );
//             setDoctors(data.doctors);
//         };
//         fetchDoctors();
//     }, []);

//     const handleAppointment = async(e)=>{
//         e.preventDefault();

//     }

//     return (
//         <>

//         <div className='container form-component register-form'>
//     <h2>Register for Care404: Your Health, Your Control</h2>
//     <p>Please sign up to continue and gain access to your personalized healthcare dashboard.</p>
//     <p>Join Care404 today and take control of your health journey with our secure and streamlined platform.</p>
//     <form onSubmit={handleAppointment}>
//       <div>
//         <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </div>
//       <div>
//         <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
//       </div>
//       <div>
//         <input type="number" placeholder='NIC' value={NIC} onChange={(e) => setNic(e.target.value)} />
//         <input type="date" placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
//       </div>
//       <div>
//         <select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>

//       </div>
//       <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
//         <p style={{ marginBottom: 0 }}>Already have an account?</p>
//         <Link to={"/login"} style={{ textDecoration: "none", alignItems: "center" }}>Log In to Care404</Link>
//       </div>
//       <div style={{ justifyContent: "center", alignItems: "center" }}>
//         <button type='submit'>Resgiter with Care404</button>
//       </div>
//     </form>
//   </div>



//         </>
//     )
// }

// export default AppointmentForm

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [NIC, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [department, setDepartment] = useState("");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState("");

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

    const navigateTo = useNavigate();

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/user/doctors",
                    { withCredentials: true }
                );
                setDoctors(data.doctors);
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
            }
        };
        fetchDoctors();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited)
            const { data } = await axios.post("http://localhost:4000/api/v1/appointment/post", {
                firstName,
                lastName,
                email,
                phone,
                NIC,
                dob,
                gender,
                appointment_date: appointmentDate,
                department,
                doctor_firstName: doctorFirstName,
                doctor_lastName: doctorLastName,
                address,
                hasVisited: hasVisitedBool
            },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            toast.success(data.message);
            navigateTo("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className='container form-component appointment-form'>
            <h2>Book Your Appointment with Care404</h2>
            <p>Fill in the details below to schedule an appointment with our expert doctors.</p>
            <form onSubmit={handleAppointment}>
                <div>
                    <input
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='NIC'
                        value={NIC}
                        onChange={(e) => setNic(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder='Date of Birth'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="date"
                        placeholder='Appointment Date'
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </div>

                <div>
                    {/* Department Selection */}
                    <select
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                            setDoctorFirstName(""); // Reset doctor selection
                            setDoctorLastName("");  // Reset doctor selection
                        }}
                    >
                        <option value="">Select Department</option>
                        {departmentsArray.map((department) => (
                            <option key={department} value={department}>
                                {department}
                            </option>
                        ))}
                    </select>

                    {/* Doctor Selection */}
                    <select
                        value={doctorFirstName && doctorLastName ? `${doctorFirstName} ${doctorLastName}` : ""}
                        onChange={(e) => {
                            const selectedDoctor = doctors.find(doc => `${doc.firstName} ${doc.lastName}` === e.target.value);
                            if (selectedDoctor) {
                                setDoctorFirstName(selectedDoctor.firstName);
                                setDoctorLastName(selectedDoctor.lastName);
                            }
                        }}
                        disabled={!department} // Disable doctor selection until a department is selected
                    >
                        <option value="">Select Doctor</option>
                        {doctors
                            .filter((doctor) => doctor.doctorDepartment === department)
                            .map((doctor, index) => (
                                <option
                                    key={index}
                                    value={`${doctor.firstName} ${doctor.lastName}`}
                                >
                                    {doctor.firstName} {doctor.lastName}
                                </option>
                            ))}
                    </select>
                </div>


                <div>
                    <textarea
                        rows={5}
                        placeholder='Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div style={{ justifyContent: "center", flexDirection: "row" }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={hasVisited}
                            onChange={(e) => setHasVisited(e.target.checked)}
                            style={{ flex: "none", width: "25px" }}
                        />
                        Have you visited us before?
                    </label>
                </div>

                <div style={{ justifyContent: "center", alignItems: "center" }}>
                    <button type='submit'>Book Appointment</button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
