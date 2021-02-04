import React from 'react'
import {Link} from './styles'

export const ExternalLink = ({to, children}) => (
  <Link to={to} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)
