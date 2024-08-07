import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import Globe from '../assets/Globe.png';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

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

  return (
    <motion.div 
      className='about-container'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className='about-main'>
        <div className='about-left'>
          <motion.div 
            className='about-img'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={Globe} alt="Globe" />
          </motion.div>
          <motion.div 
            className='about-heading'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1>Based in<br/>Haryana, India<br/><span>GMT +5:30</span></h1>
          </motion.div>
        </div>
        <div className='about-right'>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h1>As a web designer and developer <span>i believe in creating catchy designs with deep focus on functionality of the product.</span></h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
