import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return <>

    <Hero title={"Welcome to Care404: Aditya’s Health Matrix v1.0 Initialized.."} imageUrl={"/hero1.png"}/>
    <Biography imageUrl={"/about1.png"}/>
    <Departments />
    <MessageForm />

  </>
};

export default Home;
