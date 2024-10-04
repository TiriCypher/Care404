import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    Welcome to <b>Care404: Aditya’s Health Matrix v1.0</b> —a cutting-edge hospital management system
                    designed to streamline and optimize healthcare operations. This advanced platform integrates
                    seamlessly into hospital workflows, providing a comprehensive solution for managing patient
                    information, appointments, medical records, and staff coordination.
                </p>
            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero" className='animated-image'/>
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default Hero
