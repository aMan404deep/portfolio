import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
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
      className='skills-container'
      id='skills-container'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className='skills-main'>
        <motion.div 
          className='skill-heading'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Skills:</h1>
        </motion.div>
        <div className='skills-content'>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4>HTML</h4>
            <div className='skill-bar'>
              <div className='skill1'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h4>CSS</h4>
            <div className='skill-bar'>
              <div className='skill2'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h4>JavaScript</h4>
            <div className='skill-bar'>
              <div className='skill3'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4>React</h4>
            <div className='skill-bar'>
              <div className='skill4'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4>Node.js</h4>
            <div className='skill-bar'>
              <div className='skill5'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4>Express.js</h4>
            <div className='skill-bar'>
              <div className='skill6'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4>MongoDB</h4>
            <div className='skill-bar'>
              <div className='skill7'></div>
            </div>
          </motion.div>
          <motion.div 
            className='skill'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4>Figma</h4>
            <div className='skill-bar'>
              <div className='skill8'></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
