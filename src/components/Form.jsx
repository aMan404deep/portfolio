import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import '../styles/Form.css';
import {useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Form = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Am@100103', 'template_uhisela', form.current, 'Tc3UK1BnV_vc2K-kf')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
      });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <div>
      <div className='nav-container'>
      <div className='navbar'>
        <div className='nav-heading' onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <h3>Amandeep Singh.</h3>
        </div>
      </div>
    </div>
      <motion.div
      className='form-container'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={formVariants}
    >
      <form ref={form} onSubmit={sendEmail} className='form-main'>
        <div className='form-left'>
          <div className='form-heading'>
            <h1>Let's get<br/><span>Started.</span></h1>                
          </div>
        </div>
        <div className='form-right'>
          <div className='form-fill'>
            <div className='line'>
              <p>My name is</p>
              <input type='text' name='user_name' className='name' placeholder='YOUR FULL NAME' required />
              <p>and I</p>
            </div>
            <div className='line'>
              <p>have a</p>
              <input type='text' name='user_project' className='work' placeholder='WEBSITE, WEB DESIGN, ETC.' required />
              <p>that</p>
            </div>
            <div className='line'>
              <p>needs help. You can reach me at</p>
            </div>
            <div className='line'>
              <input type='email' name='user_email' className='email' placeholder='YOUR EMAIL ADDRESS' required />
              <p>to get</p>
            </div>
            <div className='line'>
              <p>things started.</p>
            </div>
          </div>
          <div className='submit'>
            <div className='submit-text'>
              <button type='submit' className='submit-button'>- SEND INFO</button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
    </div>
  );
}

export default Form;



// emailjs.sendForm('Am@100103', 'template_uhisela', form.current, 'Tc3UK1BnV_vc2K-kf')