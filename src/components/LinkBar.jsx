import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/LinkBar.css';

const LinkBar = () => {
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
      className='link-container'
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className='link-main'>
        <div className='links'><a target='_blank' href="https://www.linkedin.com/in/amandeep-singh-linked-in/">linkedin.</a></div>
        <div className='links'><a target='_blank' href='https://www.instagram.com/amandeep.this.side/'>instagram.</a></div>
        <div className='links'><a target='_blank' href='https://x.com/AmanThinksDeep'>twitter.</a></div>
        <div className='links'><a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&to=socialaman101@gmail.com'>gmail.</a></div>
      </div>
    </motion.div>
  );
}

export default LinkBar;
