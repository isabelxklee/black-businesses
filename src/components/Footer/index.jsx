import React from 'react'
import {ExternalLink} from '../Links'
import {MessageWrapper, Message} from './styles'
import {H3, P2} from '../../styles'
import {LargeCheck} from '../Check/styles'

const Footer = () => (
  <footer>
    <LargeCheck />
    <MessageWrapper>
      <Message>
        <H3>Have a website to add to the directory?</H3>
        <P2>
          If you’d like to submit a business, whether it’s your own or your favourite place to grab
          your lunch, email us at{' '}
          <ExternalLink href="mailto:hi@superhi.com">submit@black-owned.com</ExternalLink>
        </P2>
      </Message>
    </MessageWrapper>
    <LargeCheck />
  </footer>
)

export default Footer
