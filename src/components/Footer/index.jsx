import React from 'react'
import {Message} from './styles'
import {H3, P2} from '../../styles'
import {LargeCheck} from '../Check/styles'

const Footer = () => (
  <footer>
    <LargeCheck />
    <Message>
      <H3>Have a website to add to the directory?</H3>
      <P2>
        If you’d like to submit a business, whether it’s your own or your favourite place to grab
        your lunch, email us at submit@black-owned-businesses.com
      </P2>
    </Message>
    <LargeCheck />
  </footer>
)

export default Footer
