import React from 'react'
import {Link} from 'react-router-dom'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessTileCard from './styled-components/BusinessTileCard'
import mapPin from '../assets/map-pin.svg'

const BusinessTile = ({business}) => (
  <BusinessTileCard>
    <Link to={`businesses/${business.id}`}>
      <img src={business.image_url} alt={business.title} className="business-tile-image" />
    </Link>
    <BusinessTags business={business} />
    <Link to={`businesses/${business.id}`}>
      <h3 className="business-tile-name">{business.title}</h3>
    </Link>
    <img src={mapPin} alt="red icon of a map pin" className="map-pin" />
    <p className="address">
      {business.city}, {business.state}
    </p>
    <p className="description">{business.description}</p>
    <a href={business.website} target="noreferrer_blank" className="site-link">
      Visit their site
    </a>
  </BusinessTileCard>
)

BusinessTile.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTile
