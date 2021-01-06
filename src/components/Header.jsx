import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from './styled-components/Navigation.jsx'
import Title from './styled-components/Title.jsx'
import Links from './styled-components/Links.jsx'
import TextLink from './styled-components/TextLink.jsx'

const Header = () => (
  <Navigation>
    <Link to="/" component={TextLink}>
      <Title>Black-Owned Food & Drink</Title>
    </Link>
    <Links>
      <Link to="/" component={TextLink}>
        Map
      </Link>
      <Link to="/businesses" component={TextLink}>
        Showcase
      </Link>
    </Links>
  </Navigation>
)

export default Header
