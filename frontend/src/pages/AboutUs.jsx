import React from 'react'
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>{/* title="The Heart of Care404: Our Story and Values" */}
    <Hero title={"About Care404: Pioneering Personalized Health Solutions"} imageUrl={"/about.png"}/>
    <Biography imageUrl={"/whoweare.png"}/>

    </>
  )
};

export default AboutUs;
