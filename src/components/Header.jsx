import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile drawer when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close mobile drawer when screen resizing past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        José Soares
      </Link>

      <button 
        className={`burger-btn ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Acerca de mim
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Meu trabalho
          </NavLink>
        </li>
        
       
        <li>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contacto
          </NavLink>
        </li>
        <li>
            <NavLink
            to="/videos"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
  >
    Videos
  </NavLink>
</li>
         

      </ul>
    </header>
  )
}

export default Header
