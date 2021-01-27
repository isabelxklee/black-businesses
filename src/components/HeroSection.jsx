import React from 'react'
import {ReactComponent as TileDivider} from '../assets/tile-divider.svg'
import HeroGrid from './styled-components/HeroGrid.jsx'
import HeroTextContainer from './styled-components/HeroTextContainer.jsx'
import HeroTextH2 from './styled-components/HeroTextH2.jsx'
import heroImage from '../assets/hero-image.png'
import HeroImage from './styled-components/HeroImage.jsx'

const HeroSection = () => (
  <div className="hero-section">
    <HeroGrid>
      <HeroImage src={heroImage} />
      <HeroTextContainer>
        <HeroTextH2>Support local Black owned businesses!</HeroTextH2>
        <p>
          Use our directory to discover new Black owned businesses local to you, or add your own to
          the directory.
        </p>
      </HeroTextContainer>
    </HeroGrid>

    <TileDivider />
  </div>
)

export default HeroSection
