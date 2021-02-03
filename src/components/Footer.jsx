import React from 'react'
import FooterMessage from './styled-components/FooterMessage.jsx'
import H3 from './styled-components/H3.jsx'
import SecondaryP from './styled-components/SecondaryP.jsx'
import TileDivider from './styled-components/TileDivider.jsx'
import tileDividerAsset from '../assets/tile-divider.svg'

const Footer = () => (
  <footer>
    <TileDivider src={tileDividerAsset} alt="repeating red and white check pattern" />
    <FooterMessage>
      <H3>Have a website to add to the directory?</H3>
      <SecondaryP>
        If you’d like to submit a business, whether it’s your own or your favourite place to grab
        your lunch, email us at submit@black-owned-businesses.com
      </SecondaryP>
    </FooterMessage>
    <TileDivider src={tileDividerAsset} alt="repeating red and white check pattern" />
  </footer>
)

export default Footer
