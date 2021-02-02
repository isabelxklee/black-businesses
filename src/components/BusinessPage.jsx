import React from 'react'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessImage from './styled-components/BusinessImage.jsx'
import BusinessPageContainer from './styled-components/BusinessPageContainer.jsx'
import StyledLink from './styled-components/StyledLink.jsx'
import TextLink from './styled-components/TextLink.jsx'
import BusinessPageWrapper from './styled-components/BusinessPageWrapper.jsx'
import Address from './styled-components/Address.jsx'
import mapPinIcon from '../assets/map-pin.svg'
import MapPin from './styled-components/MapPin.jsx'
import H1 from './styled-components/H1.jsx'
import H4 from './styled-components/H4.jsx'
import P from './styled-components/P.jsx'
import AddressContainer from './styled-components/AddressContainer.jsx'
import BusinessInfo from './styled-components/BusinessInfo.jsx'
import BusinessTileInformation from './styled-components/BusinessTileInformation.jsx'
import ImageContainer from './styled-components/ImageContainer.jsx'

const BusinessPage = ({business}) => (
  <BusinessPageWrapper>
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
        <BusinessTileInformation>
          <P>{business.description}</P>
        </BusinessTileInformation>
        <TextLink href={business.website} target="noreferrer_blank">
          Visit site
        </TextLink>
      </div>

      <div>
        <BusinessInfo>
          <H4>Tags: </H4>
          <BusinessTags business={business} />
        </BusinessInfo>

        <BusinessInfo $isOnBusinessPage={true}>
          <H4>Full address: </H4>
          <P>{business.address ? business.address : null}</P>
          <P>
            {business.city}, {business.state}
          </P>
        </BusinessInfo>
      </div>
    </BusinessPageContainer>
  </BusinessPageWrapper>
)

BusinessPage.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessPage
