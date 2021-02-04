import React from 'react'
import PropTypes from 'prop-types'
import SecondaryTag from './styled-components/SecondaryTag.jsx'

const BusinessTags = ({business}) =>
  business.categories.map((category) => (
    <SecondaryTag key={category} id={category}>
      {category}
    </SecondaryTag>
  ))

BusinessTags.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessTags
