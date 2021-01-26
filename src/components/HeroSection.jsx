import React from 'react'
import {ReactComponent as TileDivider} from '../assets/tile-divider.svg'
import heroImage from '../assets/hero-image.png'

const HeroSection = () => (
  <div className="hero-section">
    <div className="grid">
      <img src={heroImage} className="hero-image" />
      <div className="hero-text">
        <h2 className="hero-text">Support local Black owned businesses!</h2>
        <p>
          Use our directory to discover new Black owned businesses local to you, or add your own to
          the directory.
        </p>
      </div>
    </div>

    <TileDivider />
  </div>
)

export default HeroSection
