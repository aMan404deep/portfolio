import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Project.css';

const Project = () => {
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
      className='project-container'
      id='project-container'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className='project-main'>
        <motion.div 
          className='project-heading'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Projects I did:</h1>
        </motion.div>
        <div className='project-data'>
          <motion.div 
            className='project-left'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className='project dev2'>
              <div className='project-text'>
                <h4><a target='_blank' href='https://ruffleshop.netlify.app/'>Ruffle</a></h4>
              </div>
            </div>
            <div className='project dev3'>
              <div className='project-text'>
                <h4><a target='_blank' href='https://financiobills.netlify.app/'>Financio.</a></h4>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='project-right'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className='project dev1'>
              <div className='project-text'>
                <h4><a target='_blank' href='https://github.com/aMan404deep/WeatherApp.git'>WeatherUp</a></h4>
              </div>
            </div>
            <div className='project dev4'>
              <div className='project-text'>
                <h4><a target='_blank' href='https://github.com/aMan404deep/Fitness'>Shred</a></h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
