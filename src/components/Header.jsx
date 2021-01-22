import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import tile from '../assets/tiles.svg'
import Navigation from './styled-components/Navigation.jsx'
import TextLink from './styled-components/TextLink.jsx'

const Header = () => (
  <Navigation>
    <img src={tile} alt="Repeating red and white tile pattern" className="tile left" />
    <div className="header-links">
      <Link to="/" component={TextLink}>
        Map
      </Link>
      <Link to="/businesses" component={TextLink}>
        Browse
      </Link>
      <h1>
        <Link to="/" component={TextLink}>
          <img src={logo} alt="Logo for Black owned food and drink directory" className="logo" />
        </Link>
      </h1>
      <Link to="/resources" component={TextLink}>
        Learn
      </Link>
    </div>
    <img src={tile} alt="Repeating red and white tile pattern" className="tile right" />
  </Navigation>
)

export default Header
