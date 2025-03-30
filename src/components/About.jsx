import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <div className="image-frame">
              <div className="about-image-placeholder"></div>
            </div>
          </div>
          
          <div className="about-text" data-aos="fade-left">
            <p>
            Tech isn't just my career—it's my passion.
            </p>
            <p>
            I’m an IT professional who enjoys <strong>exploring, experimenting, and engineering</strong> solutions across multiple domains. Whether it's designing scalable applications, diving into AI/ML models, or optimizing system architectures, 
            I bring a problem-solving mindset and a keen eye for innovation.
            </p>
            <p>
            My expertise spans <strong>software development, AI/ML, automation, and cloud technologies, </strong>allowing me to create tech solutions that are not only functional but also forward-thinking. 
            I believe in the power of technology to drive change, enhance efficiency, and shape the future.
            </p>
            <p>
            Beyond code, I’m a tech enthusiast who loves learning,
             mentoring, and exploring how technology can shape a sustainable future. Whether 
             it’s developing a groundbreaking app or optimizing a system for efficiency, I bring passion and precision to every project.
            </p>
            Let’s Bring ideas to life through technology, innovation, and endless possibilities! 🚀✨
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;