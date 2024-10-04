import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="AboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are?</h3>
                <p>
                    Welcome to <b>Care404</b>, where we revolutionize hospital management with state-of-the-art technology.
                    Our goal is to elevate healthcare delivery by providing a comprehensive, user-friendly platform that
                    integrates seamlessly with hospital operations. From managing patient records to streamlining appointment
                    scheduling, our system is designed to enhance efficiency and ensure top-notch care. Discover how <b>Care404 </b>
                    is transforming healthcare management, one innovation at a time.
                </p>
                <p>
                    <b>Care404</b> is a joint venture between Horizon Healthcare and Zapier, two leading healthcare IT companies. Our team of experts brings together expertise in various healthcare sectors, including hospital management, IT, and customer service. We have worked closely together to create a solution that truly meets the needs of our clients.
                </p>
                <p>
                    <b>Care404</b> is committed to delivering innovative solutions that empower healthcare professionals and patients alike. We strive to create a user-friendly platform that simplifies hospital workflows, improves efficiency, and helps improve patient outcomes. We believe that healthcare should be accessible, convenient, and affordable, and that our platform can make that possible.
                </p>
                <p>
                    <b>Care404</b> is dedicated to providing a secure, reliable, and user-friendly platform for hospitals, clinics, and other healthcare organizations to streamline their operations, improve patient outcomes, and enhance overall healthcare delivery. By using <b>Care404</b>, you can access a wide range of tools, services, and features that will help you optimize your hospital's performance and improve your patient care.
                </p>
                <p>
                    We are thrilled to be working with you, and we are excited to share our passion for healthcare management and our commitment to creating a user-friendly platform that empowers healthcare professionals and patients alike. If you have any questions or need further information, please don't hesitate to reach out to us.
                </p>
                <p>
                    Sincerely,
                    <br />
                    <b>Aditya Goyal,</b>
                    <br />
                    <i><b>CEO</b></i>, <b>Care404</b>
                </p>
            </div>
        </div>
    )
}

export default Biography
