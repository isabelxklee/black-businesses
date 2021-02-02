import React from 'react'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessImage from './styled-components/BusinessImage.jsx'
import BusinessPageContainer from './styled-components/BusinessPageContainer.jsx'
import StyledLink from './styled-components/StyledLink.jsx'
import TextLink from './styled-components/TextLink.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import Address from './styled-components/Address.jsx'
import mapPinIcon from '../assets/map-pin.svg'
import MapPin from './styled-components/MapPin.jsx'
import H1 from './styled-components/H1.jsx'
import H4 from './styled-components/H4.jsx'
import AddressContainer from './styled-components/AddressContainer.jsx'
import ImageContainer from './styled-components/ImageContainer.jsx'

const BusinessPage = ({business}) => (
  <Wrapper>
    <StyledLink to="/businesses">
      <H4>Back to view all businesses</H4>
    </StyledLink>

    <BusinessPageContainer>
      <ImageContainer>
        <BusinessImage src={business.image_url} alt={business.title} />
      </ImageContainer>
      <div>
        <H1>{business.title}</H1>
        <AddressContainer>
          <MapPin src={mapPinIcon} />
          <Address>
            {business.city}, {business.state}
          </Address>
        </AddressContainer>
        <p>{business.description}</p>
      </div>
      <div>
        <h4>Tags: </h4>
        <BusinessTags business={business} />

        <AddressContainer $isOnBusinessPage={true}>
          <h4>Full address: </h4>
          <p>{business.address ? business.address : null}</p>
          <p>
            {business.city}, {business.state}
          </p>
        </AddressContainer>

        <TextLink href={business.website} target="noreferrer_blank">
          Visit site
        </TextLink>
      </div>
    </BusinessPageContainer>
  </Wrapper>
)

BusinessPage.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessPage
