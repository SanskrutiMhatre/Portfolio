import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitStatus('sending');

    emailjs
      .send(
        'service_mcwkvsa',
        'template_b2ameve',
        formData,
        'ldy7WrAXtfgKnP9HQ'
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send email:', error);
          setSubmitStatus('error');
        }
      );
  };

  const contactInfo = [
    {
      platform: 'LinkedIn',
      value: 'linkedin.com/in/SanskrutiMhatre',
      icon: '/icons/linkedin.png',
      link: 'https://linkedin.com/in/SanskrutiMhatre',
    },
    {
      platform: 'Email',
      value: 'mhatresanskruti42@gmail.com',
      icon: '/icons/mail.png',
      link: 'mailto:mhatresanskruti42@gmail.com',
    },
    {
      platform: 'GitHub',
      value: 'github.com/SanskrutiMhatre',
      icon: '/icons/github.png',
      link: 'https://github.com/SanskrutiMhatre',
    },
    {
      platform: 'Phone',
      value: '9529412675',
      icon: '/icons/phone.png',
      link: 'tel:9529412675',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h3>Let's Get In Touch</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <ul className="contact-list">
              {contactInfo.map((info, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <img src={info.icon} alt={info.platform} width={50} className="contact-icon" />
                    <div>
                      <h4>{info.platform}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button
                type="submit"
                className={`submit-button ${submitStatus ? submitStatus : ''}`}
                disabled={submitStatus === 'sending'}
              >
                {submitStatus === 'sending'
                  ? 'Sending...'
                  : submitStatus === 'success'
                  ? 'Message Sent!'
                  : submitStatus === 'error'
                  ? 'Failed to Send'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;