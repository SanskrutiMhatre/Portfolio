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
              I am a passionate and driven Information Technology student with a focus on 
              Cybersecurity, currently pursuing a B.E. at A.P. Shah Institute of Technology. 
              With a solid foundation in programming languages such as Java, C++, and Python, 
              as well as web development technologies including React and Node.js, I have honed 
              my skills through various projects and internships.
            </p>
            <p>
              My experience as a Software Developer Intern involved designing user-friendly web 
              applications that streamline processes and enhance user interaction. I thrive in 
              collaborative environments and enjoy contributing to innovative solutions that 
              improve efficiency and user experience.
            </p>
            <p>
              As a <strong>core member of the DevOps Club</strong>, I actively engage in knowledge 
              sharing and networking within the tech community. I am eager to leverage my skills 
              in software development and cybersecurity to tackle real-world challenges and make 
              a meaningful impact in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;