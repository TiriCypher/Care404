import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationArrow, FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const hours = [
    {
      id: 1,
      service: "Emergency Services",
      days: "Open 24/7",
      time: "",
    },
    {
      id: 2,
      service: "General OPD",
      days: "Monday to Saturday",
      time: "9:00 AM - 5:00 PM",
      sunday: "Sunday: 10:00 AM - 2:00 PM",
    },
    {
      id: 3,
      service: "Specialty Clinics",
      days: "Monday to Friday",
      time: "10:00 AM - 6:00 PM",
      sunday: "Sunday: Closed",
    },
    {
      id: 4,
      service: "Normal Clinic",
      days: "Monday to Saturday",
      time: "8:00 AM - 4:00 PM",
      sunday: "Sunday: 10:00 AM - 12:00 PM",
    },
    {
      id: 5,
      service: "Dental Clinic",
      days: "Monday to Saturday",
      time: "9:00 AM - 6:00 PM",
      sunday: "Sunday: 10:00 AM - 1:00 PM",
    },
    {
      id: 6,
      service: "Pediatric Clinic",
      days: "Monday to Friday",
      time: "9:00 AM - 4:00 PM",
      sunday: "Sunday: 10:00 AM - 2:00 PM",
    },
    {
      id: 7,
      service: "Orthopedic Clinic",
      days: "Monday to Saturday",
      time: "10:00 AM - 5:00 PM",
      sunday: "Sunday: Closed",
    },
    {
      id: 8,
      service: "ENT Clinic",
      days: "Monday to Saturday",
      time: "11:00 AM - 4:00 PM",
      sunday: "Sunday: 10:00 AM - 12:00 PM",
    },
  ];

  return (
    <>
      <footer className='container'>
        <hr />

        <div className="content">
          <div>
            <img src="/logo1.png" alt="Care404 Logo" className='logo-img' />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={"/"}>HOME</Link></li>
              <li><Link to={"/appointment"}>Appointment</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/healthtips"}>Health Tips</Link></li>
              <li><Link to={"/privacy"}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Working Hours</h4>
            <ul>
              {hours.map(hour => (
                <li key={hour.id}>
                  {hour.service}: {hour.days} {hour.time && `, ${hour.time}`}
                  {hour.sunday && <><br />{hour.sunday}</>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone size={20} /> +91-70696 07176
            </div>
            <br />
            <div>
              <MdEmail size={20} /> adityamg30@gmail.com
            </div>
            <br />
            <div>
              <FaLocationArrow size={20} /> Care404 - Krishna Nagar, Bank Colony, Hisar, Haryana 125001
            </div>
            <br />
            <div>
              <iframe
                title="Care404 Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6969.077162833022!2d75.72135896636314!3d29.148797271272517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233250138c33f%3A0xc04b27b28b0a2aec!2sKrishna%20Nagar%20Colony%2C%20Hisar%2C%20Haryana%20125001!5e0!3m2!1sen!2sin!4v1724049920940!5m2!1sen!2sin"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
  <h4>Stay Connected</h4>
  <div>
    <a href="https://www.facebook.com/care404hospital/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook size={30} style={{ color: '#3b5998' }} />
    </a> &nbsp;
    <a href="https://www.instagram.com/aditya_aggarwal09/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram size={30} style={{ color: '#E4405F' }} />
    </a> &nbsp;
    <a href="https://x.com/care404health" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter size={30} style={{ color: '#00acee' }} />
    </a> &nbsp;
    <a href="https://www.linkedin.com/in/adityagoyal00/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedinIn size={30} style={{ color: '#0077b5' }} />
    </a>
  </div>

  <div style={{ marginTop: '10px' }}>
    <a href="https://github.com/care404" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub size={30} style={{ color: '#333' }} />
    </a> &nbsp;
    <a href="https://wa.me/7069607176" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <FaWhatsapp size={30} style={{ color: '#25D366' }} />
    </a> &nbsp;
    <a href="https://t.me/care404" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
      <FaTelegramPlane size={30} style={{ color: '#0088cc' }} />
    </a> &nbsp;
  </div>
</div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
