// import React, { useContext, useEffect, useState } from 'react';
// import { Context } from "../main";
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// import { GoCheckCircleFill } from "react-icons/go";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { toast } from 'react-toastify';

// const Dashboard = () => {
//   const { isAuthenticated, user } = useContext(Context);

//   const [appointments, setAppointments] = useState([]);
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchAppointmentsAndDoctors = async () => {
//       try {
//         const [appointmentsResponse, doctorsResponse] = await Promise.all([
//           axios.get("http://localhost:4000/api/v1/appointment/getall", { withCredentials: true }),
//           axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true })
//         ]);

//         setAppointments(appointmentsResponse.data.appointments);
//         setDoctors(doctorsResponse.data.doctors);
//       } catch (error) {
//         setAppointments([]);
//         setDoctors([]);
//         console.log("500.. Error Fetching Data. Try Again...", error);
//       }
//     };

//     fetchAppointmentsAndDoctors();
//   }, []);



//   const handleUpdateStatus = async (appointmentId, status) => {
//     try {
//       const { data } = await axios.put(`http://localhost:4000/api/v1/appointment/update/${appointmentId}`, { status }, { withCredentials: true });
//       setAppointments(prevAppointments => {
//         return prevAppointments.map(appointment => appointment._id === appointmentId ? { ...appointment, status } : appointment);
//       });
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };



//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   return (
//     <>
//       <section className="dashboard page">
//         <div className="banner">
//           <div className="firstBox">
//             <img src="/doc.png" alt="Dashboard Img" />
//             <div className="content">
//               <div>
//                 <p>Hello,</p>
//                 <h5>
//                   {user && `${user.firstName} ${user.lastName}`}
//                 </h5>
//               </div>
//               <p>
//                 Welcome to Care404, where your health is our priority. Whether you’re scheduling appointments,
//                 consulting with our doctors, or reviewing your health records, we are here to ensure you have
//                 a seamless and comfortable experience. Stay healthy, stay safe, and let us take care of the rest.
//               </p>
//             </div>
//           </div>
//           <div className="secondBox">
//             <p>Total Appointments</p>
//             <h3>{appointments.length}</h3>
//           </div>
//           <div className="thirdBox">
//             <p>Registered Doctors</p>
//             <h3>{doctors.length}</h3> 
//           </div>
//         </div>
//         <div className="banner">
//           <h5>Current Appointments</h5>
//           <table>
//             <thead>
//               <tr>
//                 <th>Patient Name</th>
//                 <th>Date</th>
//                 <th>Doctor</th>
//                 <th>Department</th>
//                 <th>Status</th>
//                 <th>Visited Before</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 appointments && appointments.length > 0 ? (
//                   appointments.map(appointment => {
//                     return (
//                       <tr key={appointment._id}>
//                         <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
//                         <td>{appointment.appointment_date}</td>
//                         <td>
//                           {appointment.doctor && appointment.doctor.firstName} {appointment.doctor.lastName}
//                         </td>
//                         <td>
//                           {appointment.department}
//                         </td>
//                         <td>

//                           <select
//                             className={
//                               appointment.status === "Pending"
//                                 ? "value-pending"
//                                 : appointment.status === "Cancelled"
//                                   ? "value-rejected"
//                                   : "value-accepted"
//                             }
//                             value={appointment.status}
//                             onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}
//                           >
//                             <option value="Pending" className="value-pending">
//                               Pending
//                             </option>
//                             <option value="Cancelled" className="value-rejected">
//                               Cancelled
//                             </option>
//                             <option value="Confirmed" className="value-accepted">
//                               Confirmed
//                             </option>
//                           </select>
//                         </td>

//                         <td>
//                           {appointment.hasVisited === true
//                             ? <GoCheckCircleFill style={{ color: 'green', fontSize: '24px' }} />
//                             : <AiFillCloseCircle style={{ color: 'red', fontSize: '24px' }} />}
//                         </td>
//                       </tr>
//                     )
//                   })
//                 ) : <h1>No Appointments</h1>
//               }
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;
import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../main";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { FaStethoscope } from 'react-icons/fa';
import '../Dashboard.css';

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State for department filter

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

  useEffect(() => {
    const fetchAppointmentsAndDoctors = async () => {
      try {
        const [appointmentsResponse, doctorsResponse] = await Promise.all([
          axios.get("http://localhost:4000/api/v1/appointment/getall", { withCredentials: true }),
          axios.get("http://localhost:4000/api/v1/user/doctors", { withCredentials: true })
        ]);

        setAppointments(appointmentsResponse.data.appointments);
        setDoctors(doctorsResponse.data.doctors);
      } catch (error) {
        setAppointments([]);
        setDoctors([]);
        console.log("500.. Error Fetching Data. Try Again...", error);
      }
    };

    fetchAppointmentsAndDoctors();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(`http://localhost:4000/api/v1/appointment/update/${appointmentId}`, { status }, { withCredentials: true });
      setAppointments(prevAppointments => {
        return prevAppointments.map(appointment => appointment._id === appointmentId ? { ...appointment, status } : appointment);
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Filter appointments by selected department
  const filteredAppointments = appointments.filter(appointment => {
    if (!selectedDepartment) return true; // If no department is selected, show all appointments
    return appointment.department === selectedDepartment;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="Dashboard Img" />
            <div className="content">
              <div>
                <p>Hello,</p>
                <h5>
                  {user && `${user.firstName} ${user.lastName}`}
                </h5>
              </div>
              <p>
                Welcome to Care404, where your health comes first. Whether booking appointments, consulting doctors, or reviewing health records, we’re here to provide a smooth and comfortable experience. Stay healthy and safe—let us handle the rest.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>{appointments.length}</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>{doctors.length}</h3>
          </div>
        </div>

        {/* Department Filter with Enhanced UI */}
        <div className="filter-section">
          <label htmlFor="filter-department">Filter by Department:</label>
          <div className="custom-dropdown">
            <FaStethoscope className="dropdown-icon" />
            <select
              id="filter-department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="department-dropdown"
            >
              <option value="">All Departments</option>
              {departmentsArray.map((department, index) => (
                <option key={index} value={department} title={`Filter by ${department}`}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="banner">
          <h5>Current Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited Before</th>
              </tr>
            </thead>
            <tbody>
              {
                filteredAppointments.length > 0 ? (
                  filteredAppointments.map(appointment => {
                    return (
                      <tr key={appointment._id}>
                        <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                        <td>{appointment.appointment_date}</td>
                        <td>
                          {appointment.doctor && appointment.doctor.firstName} {appointment.doctor.lastName}
                        </td>
                        <td>{appointment.department}</td>
                        <td>
                          <select
                            className={
                              appointment.status === "Pending"
                                ? "value-pending"
                                : appointment.status === "Cancelled"
                                  ? "value-rejected"
                                  : "value-accepted"
                            }
                            value={appointment.status}
                            onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}
                          >
                            <option value="Pending" className="value-pending">
                              Pending
                            </option>
                            <option value="Cancelled" className="value-rejected">
                              Cancelled
                            </option>
                            <option value="Confirmed" className="value-accepted">
                              Confirmed
                            </option>
                          </select>
                        </td>
                        <td>
                          {appointment.hasVisited === true
                            ? <GoCheckCircleFill style={{ color: 'green', fontSize: '24px' }} />
                            : <AiFillCloseCircle style={{ color: 'red', fontSize: '24px' }} />}
                        </td>
                      </tr>
                    );
                  })
                ) : <h1>No Appointments Found</h1>
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
