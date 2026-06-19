import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="lg-heading">
        Contacte - <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Isto é como consegue-me contatar..</h2>
      
      <div className="contact-boxes">
        <div className="contact-box">
          <span className="contact-label">Email</span>
          <a href="mailto:tiagomanuelsoaresdossantos@gmail.com" className="contact-value">
            zesoares89@gmail.com
          </a>
        </div>
        
        <div className="contact-box">
          <span className="contact-label">Phone</span>
          <a href="tel:+351910342543" className="contact-value">
            +351 936 488 900
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
