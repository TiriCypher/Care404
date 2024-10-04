import React, { useContext, useState } from 'react'
import { Context } from "../main";
import { LuHome } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { TbMessageFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const gotoHome = () => {
    navigateTo('/')
    setShow(!show);
  };
  const gotoDoctorspage = () => {
    navigateTo('/doctors')
    setShow(!show);
  };
  const gotoMessagepage = () => {
    navigateTo('/messages')
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigateTo('/doctor/addnew')
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigateTo('/admin/addnew')
    setShow(!show);
  };
  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true
      })
      .then(res => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch(err => {
        toast.error(err.response.data.message)
      });
  };


  return (
    <>
      <nav style={!isAuthenticated ? { display: "none" } : { display: "flex" }} className={show ? "show sidebar" : "sidebar"}>

        <div className="links">
          <LuHome title='Home' onClick={gotoHome} />
          
          <FaUserDoctor title='Doctors' onClick={gotoDoctorspage} />
          <MdAddModerator title='Add New Admin' onClick={gotoAddNewAdmin} />
          <IoIosPersonAdd title='Add New Doctors' onClick={gotoAddNewDoctor} />
          <TbMessageFilled title="Messages/Feedbacks" onClick={gotoMessagepage} />
          <FiLogOut title='LogOut' onClick={handleLogout} />

        </div>
      </nav>
      <div className='wrapper' style={!isAuthenticated ? { display: "none" } : { display: "flex" }}>
        <GiHamburgerMenu className='hamburger' onClick={() => setShow(!show)} />
      </div>
    </>
  )
}

export default Sidebar
