import React from 'react'
import {NavigationContainer, Navigation, LogoContainer, Logo, H1} from './styles'
import {InternalLink} from '../Links/styles'
import {SmallCheck} from '../Check/styles'

const Header = () => (
  <Navigation>
    <LogoContainer>
      <SmallCheck />
      <H1>
        <InternalLink to="/">
          <Logo alt="Logo for Black owned food and drink directory" />
        </InternalLink>
      </H1>
      <SmallCheck />
    </LogoContainer>
    <NavigationContainer>
      <InternalLink to="/">Map</InternalLink>
      <InternalLink to="/businesses">Browse</InternalLink>
      <InternalLink to="/resources">Learn</InternalLink>
    </NavigationContainer>
  </Navigation>
)

export default Header
