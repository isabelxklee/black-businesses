import React from 'react'
import tileDivider from '../assets/tile-divider.svg'
import heroImage from '../assets/hero-image.png'

const HeroSection = () => (
  <div className="hero-section">
    <div className="grid">
      <div className="hero-1">
        <img src={heroImage} className="hero-image" />
      </div>
      <div className="hero-2">
        <div className="hero-text">
          <h2>Support local Black owned businesses!</h2>
          <p>
            Use our directory to discover new Black owned businesses local to you, or add your own
            to the directory.
          </p>
        </div>
      </div>
    </div>

    <img src={tileDivider} />
  </div>
)

export default HeroSection
