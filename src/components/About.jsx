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
          {/*  <p>
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
         */}
        <strong>nice to meet you! </strong> <br></br>I'm Sanskruti Mhatre, a passionate <strong>full-stack developer </strong>
          with expertise in modern web technologies. I love creating elegant solutions to complex problems and bringing ideas to life through code. With experience in <strong>React, Node.js, and various other technologies</strong>, I enjoy building applications that provide seamless user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in software development. I believe in continuous learning and always strive
          to improve my skills and stay updated with the ever-evolving tech landscape.<br></br><br></br>
          <strong>Let’s Bring ideas to life through technology, innovation, and endless possibilities! 🚀✨</strong> </div>
        </div>
      </div>
    </section>
  );
};

export default About;