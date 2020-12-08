import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Title from './Title.jsx'
import Links from './Links.jsx'
import TextLink from './TextLink.jsx'

const Header = () => (
  <Navigation>
    <Title>Black-Owned Food & Drink</Title>
    <Links>
      <Link to="/" component={TextLink}>
        Map
      </Link>
      <Link to="/businesses" component={TextLink}>
        Showcase
      </Link>
      <Link to="/resources" component={TextLink}>
        Resources
      </Link>
    </Links>
  </Navigation>
)

export default Header
