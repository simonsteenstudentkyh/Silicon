import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext';

const Header = () => {
  const {darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header id="header-section">
      <Link to="/" className="navigation-logo">
        <img src={ darkMode ? "/images/logotype_dark.svg" : "/images/logotype_light.svg" } alt="Silicon Inc." />
      </Link>

      <nav className="main-navigation">
        <NavLink to="/features" className="navigation">Features</NavLink>
        <NavLink to="/contacts" className="navigation">Contacts</NavLink>
      </nav>

      <div className="dark-mode">
        <p className="label">Dark Mode</p>
        <input className="switch" type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </div>

      <Link to="/sign-in" className="sign-in btn primary small round">
        <i className="bi bi-person"/>
        Sign in / up
      </Link>

      <Link to="/sign-in" className="sign-in icon">
        <i className="bi bi-list"/>
      </Link>
    </header>
  )
}

export default Header