import React from 'react'
import {NavigationContainer, Navigation, LogoContainer, Logo, Tile, H1} from './styles'
import {InternalLink} from '../Links/styles'

const Header = () => (
  <Navigation>
    <LogoContainer>
      <Tile alt="Repeating red and white tile pattern" />
      <H1>
        <InternalLink to="/">
          <Logo alt="Logo for Black owned food and drink directory" />
        </InternalLink>
      </H1>
      <Tile alt="Repeating red and white tile pattern" />
    </LogoContainer>
    <NavigationContainer>
      <InternalLink to="/">Map</InternalLink>
      <InternalLink to="/businesses">Browse</InternalLink>
      <InternalLink to="/resources">Learn</InternalLink>
    </NavigationContainer>
  </Navigation>
)

export default Header
