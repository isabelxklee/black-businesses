import React from 'react'
import tileDivider from '../assets/tile-divider.svg'

const Footer = () => (
  <footer>
    <img src={tileDivider} className="tile-divider" />
    <div className="footer-message">
      <h3>Have a website to add to the directory?</h3>
      <p>
        If you’d like to submit a business, whether it’s your own or your favourite place to grab
        your lunch, email us at submit@black-owned-businesses.com
      </p>
    </div>
    <img src={tileDivider} className="tile-divider" />
  </footer>
)

export default Footer
