import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profile from '../assets/portfolio.jpg';
import mind from '../assets/Mindfulness.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <motion.div 
      className='hero-container'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='hero-main'>
        <div className='hero-left'>
          <motion.div 
            className='hero-img'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={profile} alt="Profile" />
          </motion.div>
          <motion.div 
            className='hero-heading'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1>I'm a <span>web</span><br/><span>developer</span><br/>and <span>designer.</span></h1>
          </motion.div>
        </div>
        <div className='hero-right'>
          <motion.div 
            className='hero-right-img'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={mind} alt="Mindfulness" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h1>Have a<br/>project in<br/>mind?</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <button onClick={handleButtonClick}>Let's Talk</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
