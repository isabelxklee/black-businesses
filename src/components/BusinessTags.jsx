import React from 'react'
import SecondaryTag from './styled-components/SecondaryTag.jsx'

const BusinessTags = ({business}) =>
  business.categories.map((category) => (
    <SecondaryTag key={category} id={category}>
      {category}
    </SecondaryTag>
  ))

export default BusinessTags
