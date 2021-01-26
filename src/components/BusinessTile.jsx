import React from 'react'
import {Link} from 'react-router-dom'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessTileCard from './styled-components/BusinessTileCard'
import TextLink from './styled-components/TextLink.jsx'
import Address from './styled-components/Address.jsx'
import {ReactComponent as MapPin} from '../assets/map-pin.svg'

const BusinessTile = ({business}) => (
  <BusinessTileCard>
    <Link to={`businesses/${business.id}`}>
      <img src={business.image_url} alt={business.title} className="business-tile-image" />
    </Link>
    <div>
      <BusinessTags business={business} />
    </div>
    <Link to={`businesses/${business.id}`}>
      <h3 className="business-tile-name">{business.title}</h3>
    </Link>
    <MapPin />
    <Address>
      {business.city}, {business.state}
    </Address>
    <p>{business.description}</p>
    <TextLink href={business.website} target="noreferrer_blank">
      Visit site
    </TextLink>
  </BusinessTileCard>
)

BusinessTile.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTile
