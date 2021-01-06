import React from 'react'
import {IBusiness} from '../types'
import SecondaryTag from './styled-components/SecondaryTag.jsx'

const BusinessTags = ({business}) =>
  business.categories.map((category) => (
    <SecondaryTag key={category} id={category}>
      {category}
    </SecondaryTag>
  ))

BusinessTags.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTags
