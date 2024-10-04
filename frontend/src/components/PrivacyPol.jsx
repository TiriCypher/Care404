import React from 'react'

const PrivacyPol = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    At <b>Care404</b>, your privacy is our top priority. We are committed to protecting the personal
                    information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you
                    access our website and services. By using our platform, you agree to the terms outlined in this policy. We ensure
                    that your data is handled with the utmost care and security as we strive to maintain a safe and trustworthy environment
                    for our users.
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

export default PrivacyPol
