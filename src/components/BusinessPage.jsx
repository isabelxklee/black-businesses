import React from 'react'
import {Link} from 'react-router-dom'
import {IBusiness} from '../types'
import BusinessTags from './BusinessTags'
import TextLink from './styled-components/TextLink.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import Address from './styled-components/Address.jsx'
import {ReactComponent as MapPin} from '../assets/map-pin.svg'

const BusinessPage = ({business}) => (
  <Wrapper>
    <Link to="/businesses">
      <h4>View all businesses</h4>
    </Link>

    <div className="business-page">
      <div>
        <img src={business.image_url} alt={business.title} className="business-page" />
      </div>

      <div>
        <h1>{business.title}</h1>
        <MapPin />
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
)

// you can load a loading screen or a 404 page instead of null
// talk about this in the course video, but don't have to implement
// maybe make a homework exercise

BusinessPage.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessPage
