import React from 'react'

const HealthTipsHero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    Welcome to <b>Care404: Aditya’s Health Tips Hub</b> —your go-to guide for maintaining a healthy lifestyle.
                    From nutrition advice to mental wellness, this platform offers comprehensive tips and expert insights
                    to help you achieve and sustain optimal health. Whether you're looking to improve your fitness, boost
                    your immune system, or simply live a healthier life, our curated health tips are here to guide you every
                    step of the way.
                </p>

            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero" className='animated-image' />
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default HealthTipsHero
