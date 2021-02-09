import React from 'react'
import {Container, Logo, DesktopNav, MobileNav, H1} from './styles'
import {InternalLink} from '../Links/styles'
import {SmallCheck} from '../Check/styles'

const Header = () => (
  <header>
    <Container>
      <SmallCheck />
      <DesktopNav>
        <InternalLink to="/">Map</InternalLink>
        <InternalLink to="/businesses">Browse</InternalLink>
      </DesktopNav>
      <H1>
        <InternalLink to="/">
          <Logo alt="Logo for Black owned food and drink directory" />
        </InternalLink>
      </H1>
      <DesktopNav>
        <InternalLink to="/">About</InternalLink>
        <InternalLink to="/resources">Learn</InternalLink>
      </DesktopNav>
      <SmallCheck />
    </Container>
    <MobileNav>
      <InternalLink to="/">Map</InternalLink>
      <InternalLink to="/businesses">Browse</InternalLink>
      <InternalLink to="/">About</InternalLink>
      <InternalLink to="/resources">Learn</InternalLink>
    </MobileNav>
  </header>
)

export default Header
