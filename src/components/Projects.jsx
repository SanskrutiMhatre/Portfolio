import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projects = [
  {
    id: 1,
    title: "Docker Lab (Orchestration Platform + Desktop Application)",
    type: "Web & Desktop Application",
    description:
      "A platform leveraging open-source frameworks to create a dynamically scalable, container-based lab environment for technical institutes. It ensures consistent, efficient, and easily manageable lab setups across diverse platforms, enhancing both teaching and learning experiences.",
    github: "https://github.com/SanskrutiMhatre/DockerLab-desktop",
    image: "docker-lab.jpg",
    technologies: ["Docker", "Kubernetes", "React", "Electron.js", "Express.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Manasheal – Mental Wellbeing Platform",
    type: "ML + Web Application",
    description:
      "Manasheal is a web platform designed to promote mental health awareness and provide users with tools for self-assessment and emotional support. It uses machine learning to assist in identifying potential mental health concerns.",
    github: "https://github.com/SanskrutiMhatre/Manasheal-ml",
    image: "manasheal.jpg",
    technologies: ["React", "Firebase", "Random Forest", "Linear SVC"]
  },
  {
    id: 3,
    title: "DigiTrust – Decentralized Identity System",
    type: "Blockchain + Web Application",
    description:
      "DigiTrust is a decentralized identity verification system that enables users to own and manage their digital identities securely on the blockchain. It ensures transparency, ownership, and accuracy in identity verification.",
    github: "https://github.com/SanskrutiMhatre/DigiTrust",
    image: "digitrust.jpg",
    technologies: ["React", "Solidity", "MetaMask", "Ethers.js", "Express.js", "MongoDB"]
  },
  {
    id: 4,
    title: "Group Expense Tracker",
    type: "Android Application",
    description:
      "An Android app designed to manage and share expenses within user-defined groups. It supports accurate tracking, budget management, and fair cost distribution, making group expense handling effortless.",
    github: "https://github.com/SanskrutiMhatre/GroupExpensesTracker",
    image: "expense-tracker.jpg",
    technologies: ["Java", "Android Studio", "SQLite", "XML"]
  }
    {
      id: 5,
      title: "SAKHI APP - MENSTRUAL CYCLE TRACKING",
      type: "Web Application",
      description: "The Sakhi App is a user-friendly menstrual cycle tracking application designed to help individuals monitor their periods, ovulation, and overall reproductive health.",
      github: "https://github.com/SanskrutiMhatre/Sakhi",
      image: "sakhi-app.jpg",
      technologies: ["React", "JavaScript", "CSS", "Local Storage API"]
    },
    {
      id: 6,
      title: "JOB PORTAL",
      type: "Web Application",
      description: "A job portal application that connects job seekers with potential employers, streamlining the job search and recruitment process. It offers a comprehensive database of job listings, company profiles, and application tools, making it easier for candidates to find suitable employment opportunities and for employers to identify qualified talent.",
      github: "https://github.com/SanskrutiMhatre/Talent_Corner-Job_Portal",
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
