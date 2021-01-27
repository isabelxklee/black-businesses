import React from 'react'
import {Link} from 'react-router-dom'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessTileCard from './styled-components/BusinessTileCard'
import BusinessImage from './styled-components/BusinessImage.jsx'
import BusinessTileInformation from './styled-components/BusinessTileInformation.jsx'
import TextLink from './styled-components/TextLink.jsx'
import Address from './styled-components/Address.jsx'
import AddressContainer from './styled-components/AddressContainer.jsx'
import mapPinIcon from '../assets/map-pin.png'
import MapPin from './styled-components/MapPin.jsx'

const BusinessTile = ({business}) => (
  <BusinessTileCard>
    <Link to={`businesses/${business.id}`}>
      <BusinessImage src={business.image_url} alt={business.title} />
    </Link>
    <div>
      <BusinessTags business={business} />
    </div>
    <BusinessTileInformation>
      <Link to={`businesses/${business.id}`}>
        <h3 className="business-tile-name">{business.title}</h3>
      </Link>
      <AddressContainer>
        <MapPin src={mapPinIcon} />
        <Address>
          {business.city}, {business.state}
        </Address>
      </AddressContainer>
    </BusinessTileInformation>
    <TextLink href={business.website} target="noreferrer_blank">
      Visit site
    </TextLink>
  </BusinessTileCard>
)

BusinessTile.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTile
