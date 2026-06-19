import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright &copy; {currentYear} José Soares. All rights reserved.</p>
        <p className="footer-note">Designed & Programmed with React & Vite</p>
      </div>
    </footer>
  )
}

export default Footer
