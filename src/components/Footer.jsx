import React from 'react'
import FooterMessage from './styled-components/FooterMessage.jsx'
import H3 from './styled-components/H3.jsx'
import P from './styled-components/P.jsx'
import {ReactComponent as TileDivider} from '../assets/tile-divider.svg'

const Footer = () => (
  <footer>
    <TileDivider />
    <FooterMessage>
      <H3>Have a website to add to the directory?</H3>
      <P>
        If you’d like to submit a business, whether it’s your own or your favourite place to grab
        your lunch, email us at submit@black-owned-businesses.com
      </P>
    </FooterMessage>
    <TileDivider />
  </footer>
)

export default Footer
