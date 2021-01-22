import React from 'react'
import {IBusiness} from '../types'
import {Link} from 'react-router-dom'
import BusinessTags from './BusinessTags'
import Button from './styled-components/Button.jsx'

const BusinessTile = ({business}) => (
  <div className="business-tile">
    <Link to={`businesses/${business.id}`}>
      <img src={business.image_url} alt={business.title} className="business-tile-image" />
    </Link>
    <div className="business-tile-info">
      <div className="category-container">
        <BusinessTags business={business} />
      </div>
      <Link to={`businesses/${business.id}`}>
        <h3>{business.title}</h3>
      </Link>
      <div className="address">
        <p className="address">{business.address ? business.address : null}</p>
        <p className="address">
          {business.city}, {business.state}
        </p>
      </div>
      <Button href={business.website} target="noreferrer_blank">
        Website
      </Button>
    </div>
  </div>
)

BusinessTile.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTile
