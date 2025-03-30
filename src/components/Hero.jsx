import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['Freelancer.', 'Developer.', 'Designer.'],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <div className="hero-text-card">
          <p className="intro-text">HELLO</p>
          <h1 className="title">
            I'm <span className="highlight">Sanskruti Mhatre</span> a <br />
            <span ref={textRef}></span>
          </h1>
          <p className="description">
            Welcome to my portfolio! I'm a skilled and creative developer with a passion for 
            crafting beautiful, responsive, and user-friendly websites. I thrive on developing 
            innovative solutions through programming and web development.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button">Contact Me</a>
            <a href="#about" className="secondary-button">Know More</a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-delay="300">
          <div className="image-container">
            <div className="profile-image-placeholder"></div>
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;