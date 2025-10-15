import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  const words = ['Freelancer', 'Developer', 'Designer'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.textContent = words[index];
        index = (index + 1) % words.length;
      }
    }, 1000); // Decreased time interval to 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#111',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          I'm <span style={{ color: '#645cff' }}>Sanskruti Mhatre</span> a <br /> 
          <span ref={textRef} style={{ color: '#645cff' }}>Freelancer</span>.
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
          Hey, I don’t just write code—I negotiate with my compiler, debug like a detective, and occasionally convince my laptop not to crash.
          Welcome to my world of tech, caffeine, and controlled chaos! ☕💻
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="#contact" style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '30px',
            textDecoration: 'none',
            backgroundColor: '#645cff',
            color: 'white',
            transition: '0.3s',
            cursor: 'pointer'
          }}>
            Contact Me
          </a>
          <a href="#about" style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '30px',
            textDecoration: 'none',
            border: '2px solid #645cff',
            color: '#645cff',
            transition: '0.3s',
            cursor: 'pointer'
          }}>
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
