import React from 'react'
import PropTypes from 'prop-types'
import BusinessTags from './BusinessTags'
import BusinessTileCard from './styled-components/BusinessTileCard'
import BusinessImage from './styled-components/BusinessImage.jsx'
import ImageContainer from './styled-components/ImageContainer.jsx'
import BusinessTileInformation from './styled-components/BusinessTileInformation.jsx'
import TextLink from './styled-components/TextLink.jsx'
import Address from './styled-components/Address.jsx'
import AddressContainer from './styled-components/AddressContainer.jsx'
import MapPin from './styled-components/MapPin.jsx'
import H3 from './styled-components/H3.jsx'
import P from './styled-components/P.jsx'

const BusinessTile = ({business}) => (
  <BusinessTileCard>
    <ImageContainer>
      <BusinessImage src={business.image_url} alt={business.title} />
    </ImageContainer>

    <BusinessTags business={business} />
    <BusinessTileInformation>
      <H3>{business.title}</H3>
      <AddressContainer>
        <MapPin />
        <Address>
          {business.city}, {business.state}
        </Address>
      </AddressContainer>
    </BusinessTileInformation>
    <BusinessTileInformation>
      <P>{business.description}</P>
    </BusinessTileInformation>
    <TextLink href={business.website} target="noreferrer_blank">
      Visit site
    </TextLink>
  </BusinessTileCard>
)

BusinessTile.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessTile
