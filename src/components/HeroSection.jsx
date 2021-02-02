import React from 'react'
import {ReactComponent as TileDivider} from '../assets/tile-divider.svg'
import HeroGrid from './styled-components/HeroGrid.jsx'
import HeroTextContainer from './styled-components/HeroTextContainer.jsx'
import HeroText from './styled-components/HeroText.jsx'
import H2 from './styled-components/H2.jsx'
import heroImage from '../assets/hero-image.png'
import HeroImage from './styled-components/HeroImage.jsx'
import P from './styled-components/P.jsx'

const HeroSection = () => (
  <div className="hero-section">
    <HeroGrid>
      <HeroImage src={heroImage} alt="group of Black people smiling at a restaurant" />
      <HeroTextContainer>
        <HeroText>
          <H2>Support local Black owned businesses!</H2>
          <P>
            Use our directory to discover new Black owned businesses local to you, or add your own
            to the directory.
          </P>
        </HeroText>
      </HeroTextContainer>
    </HeroGrid>

    <TileDivider />
  </div>
)

export default HeroSection
