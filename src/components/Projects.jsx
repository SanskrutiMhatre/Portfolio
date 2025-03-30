import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "GROUP EXPENSES TRACKER",
      type: "Android Application",
      description: "A group expense tracker application designed to simplify the management and sharing of expenses among multiple people. It enables transparent tracking, automatic calculations, and fair distribution of costs, ensuring everyone pays their fair share effortlessly.",
      github: "https://github.com/SanskrutiMhatre",
      image: "expense-tracker.jpg",
      technologies: ["Java", "Android Studio", "Firebase", "XML"]
    },
    {
      id: 2,
      title: "MANASHEAL - MENTAL WELLBEING",
      type: "Web Application",
      description: "Manasheal is a website designed to foster mental health awareness and support. Our project aims to contribute to the global effort of ensuring healthy lives and promoting well-being for individuals of all ages.",
      github: "https://github.com/SanskrutiMhatre",
      image: "manasheal.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "SAKHI APP - MENSTRUAL CYCLE TRACKING",
      type: "Web Application",
      description: "The Sakhi App is a user-friendly menstrual cycle tracking application designed to help individuals monitor their periods, ovulation, and overall reproductive health.",
      github: "https://github.com/SanskrutiMhatre",
      image: "sakhi-app.jpg",
      technologies: ["React", "JavaScript", "CSS", "Local Storage API"]
    },
    {
      id: 4,
      title: "JOB PORTAL",
      type: "Web Application",
      description: "A job portal application that connects job seekers with potential employers, streamlining the job search and recruitment process. It offers a comprehensive database of job listings, company profiles, and application tools, making it easier for candidates to find suitable employment opportunities and for employers to identify qualified talent.",
      github: "https://github.com/SanskrutiMhatre",
      image: "job-portal.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"]
    }
  ];

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <div className="project-image-placeholder"></div>
                <div className="project-overlay">
                  <div className="project-type">{project.type}</div>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;