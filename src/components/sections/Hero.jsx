import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../contexts/DarkModeContext';

const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="hero-section">
      <div className="title">
        <d4>Manage All Your Money in One App</d4>
        <p className="large">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
     
        <div className="market-btns">
          <Link to="/app-store" className="btn large round black">
            <img src={ darkMode ? "/images/markets/appstore_dark.svg" : "/images/markets/appstore_light.svg" } alt="App Store" />
          </Link>
          <Link to="/google-play" className="btn large round black">
            <img src={ darkMode ? "/images/markets/googleplay_dark.svg" : "/images/markets/googleplay_light.svg" } alt="Google Play" />
          </Link>
        </div>
      </div>

      <img src="/images/hero-image.svg" alt="Hero image" />
    </section>
  )
}

export default Hero