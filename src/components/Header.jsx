import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import tile from '../assets/tiles.svg'
import Navigation from './styled-components/Navigation.jsx'
import NavLink from './styled-components/NavLink.jsx'

const Header = () => (
  <Navigation>
    <img src={tile} alt="Repeating red and white tile pattern" className="tile left" />
    <div className="header-links">
      <Link to="/" component={NavLink}>
        Map
      </Link>
      <Link to="/businesses" component={NavLink}>
        Browse
      </Link>
      <h1>
        <Link to="/" component={NavLink}>
          <img src={logo} alt="Logo for Black owned food and drink directory" className="logo" />
        </Link>
      </h1>
      <Link to="/resources" component={NavLink}>
        Learn
      </Link>
    </div>
    <img src={tile} alt="Repeating red and white tile pattern" className="tile right" />
  </Navigation>
)

export default Header
