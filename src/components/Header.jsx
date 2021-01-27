import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './styled-components/Logo.jsx'
import logo from '../assets/logo.svg'
import tile from '../assets/tiles.svg'
import Navigation from './styled-components/Navigation.jsx'
import NavLink from './styled-components/NavLink.jsx'
import NavLinkContainer from './styled-components/NavLinkContainer.jsx'
import LogoContainer from './styled-components/LogoContainer.jsx'
import H1 from './styled-components/H1.jsx'
import TileLeft from './styled-components/TileLeft.jsx'
import TileRight from './styled-components/TileRight.jsx'

const Header = () => (
  <Navigation>
    <LogoContainer>
      <TileLeft src={tile} alt="Repeating red and white tile pattern" />
      <H1>
        <Link to="/" component={NavLink}>
          <Logo src={logo} alt="Logo for Black owned food and drink directory" />
        </Link>
      </H1>
      <TileRight src={tile} alt="Repeating red and white tile pattern" />
    </LogoContainer>
    <NavLinkContainer>
      <Link to="/" component={NavLink}>
        Map
      </Link>
      <Link to="/businesses" component={NavLink}>
        Browse
      </Link>
      <Link to="/resources" component={NavLink}>
        Learn
      </Link>
    </NavLinkContainer>
  </Navigation>
)

export default Header
