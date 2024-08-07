import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import mind from '../assets/Mindfulness.png';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <motion.div 
      className='contact-container'
      id='contact-container'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className='contact-main'>
        <motion.img 
          src={mind} 
          alt="Mindfulness"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.h1 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Have a project in mind?
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={handleButtonClick}
        >
          Let's Discuss
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Contact;
