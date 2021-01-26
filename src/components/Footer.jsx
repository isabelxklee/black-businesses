import React from 'react'
import FooterMessage from './styled-components/FooterMessage.jsx'
import {ReactComponent as TileDivider} from '../assets/tile-divider.svg'

const Footer = () => (
  <footer>
    <TileDivider />
    <FooterMessage>
      <h3>Have a website to add to the directory?</h3>
      <p>
        If you’d like to submit a business, whether it’s your own or your favourite place to grab
        your lunch, email us at submit@black-owned-businesses.com
      </p>
    </FooterMessage>
    <TileDivider />
  </footer>
)

export default Footer
