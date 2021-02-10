import {withRouter} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import BusinessPage from '../../pages/BusinessPage'

const BusinessRouteSwitcher = ({match, businesses}) => {
  const business = businesses.find(({id}) => id.toString() === match.params.id)
  return business ? <BusinessPage business={business} /> : null
}

export default withRouter(BusinessRouteSwitcher)

BusinessRouteSwitcher.propTypes = {
  match: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.object).isRequired,
}
