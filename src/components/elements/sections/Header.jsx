import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../../contexts/DarkModeContext';

const Header = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header>
      <Link to="/" className="navigation-logo">
        <img src={ darkMode ? "/images/logotype_dark.svg" : "/images/logotype_light.svg" } alt="Silicon Inc." />
      </Link>

      <nav className="main-navigation">
        <NavLink to="/features" className="navigation-link">Features</NavLink>
        <NavLink to="/contacts" className="navigation-link">Contacts</NavLink>
      </nav>

      <div id="dark-mode">
        Dark Mode
        <input className="switch" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </div>

      <button className="btn primary small round">
        <i className="bi bi-person"/>
        Sign in / up
      </button>
    </header>
  )
}

export default Header