import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LinkBar from './components/LinkBar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Form from './components/Form';
import Loader from './components/Loader';
import Cursor from './components/Cursor'; 
import ScrollToTop from './components/ScrollToTop'; 
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className='container'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            
            <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <Hero />
                  <LinkBar />
                  <About />
                  <Project />
                  <Skills />
                  <Contact />
                </>
              } />
              <Route path="/form" element={<Form />} />
            </Routes>
            {/* <ScrollToTop/> */}
            <Cursor /> 
            <ScrollToTop/>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
