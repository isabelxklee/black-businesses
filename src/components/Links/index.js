import React from 'react'
import PropTypes from 'prop-types'
import {Link} from './styles'

export const ExternalLink = ({href, children}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
}
