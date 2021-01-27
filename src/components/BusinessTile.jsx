import React from 'react'
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
import H3 from './styled-components/H3.jsx'
import StyledLink from './styled-components/StyledLink.jsx'

const BusinessTile = ({business}) => (
  <BusinessTileCard>
    <StyledLink to={`businesses/${business.id}`}>
      <BusinessImage src={business.image_url} alt={business.title} />
    </StyledLink>
    <div>
      <BusinessTags business={business} />
    </div>
    <BusinessTileInformation>
      <StyledLink to={`businesses/${business.id}`}>
        <H3 className="business-tile-name">{business.title}</H3>
      </StyledLink>
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
