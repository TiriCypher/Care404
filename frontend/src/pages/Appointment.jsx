import React from 'react'
import AppointmentForm from '../components/AppointmentForm';
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <>
      <Hero title={"Care404: Schedule Your Appointment"} imageUrl={"/signin.png"}/>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
