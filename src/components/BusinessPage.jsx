import React from 'react'
import {Link} from 'react-router-dom'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import BusinessImage from './styled-components/BusinessImage.jsx'
import TextLink from './styled-components/TextLink.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import Address from './styled-components/Address.jsx'
import mapPinIcon from '../assets/map-pin.png'
import MapPin from './styled-components/MapPin.jsx'
import H1 from './styled-components/H1.jsx'

const BusinessPage = ({business}) => {
  return business ? (
    <Wrapper>
      <Link to="/businesses">
        <h4>View all businesses</h4>
      </Link>

      <div className="business-page">
        <div>
          <BusinessImage src={business.image_url} alt={business.title} />
        </div>

        <div>
          <H1>{business.title}</H1>
          <MapPin src={mapPinIcon} />
          <Address>
            {business.city}, {business.state}
          </Address>
          <p className="description">{business.description}</p>
        </div>

        <div>
          <h4>Tags: </h4>
          <BusinessTags business={business} />

          <div className="full-address">
            <h4>Full address: </h4>
            <p>{business.address ? business.address : null}</p>
            <p>
              {business.city}, {business.state}
            </p>
          </div>
          <TextLink href={business.website} target="noreferrer_blank">
            Visit site
          </TextLink>
        </div>
      </div>
    </Wrapper>
  ) : null
}

// you can load a loading screen or a 404 page instead of null
// talk about this in the course video, but don't have to implement
// maybe make a homework exercise

BusinessPage.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessPage
