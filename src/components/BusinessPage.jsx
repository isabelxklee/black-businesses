import React from 'react'
import BusinessTags from './BusinessTags'
import Button from './styled-components/Button.jsx'
import Wrapper from './styled-components/Wrapper.jsx'

const BusinessPage = ({business, tags}) => (
  <Wrapper>
    <section className="business-page">
      <section className="column">
        <img src={business.image_url} alt={business.title} className="business-page" />
      </section>
      <section className="column">
        <section className="category-container">
          <BusinessTags business={business} />
        </section>
        <h1 className="business-page">{business.title}</h1>
        <p>{business.description}</p>

        <section className="address">
          <h3>Address</h3>
          <p className="address">{business.address ? business.address : null}</p>
          <p className="address">
            {business.city}, {business.state}
          </p>
        </section>
        <Button href={business.website} target="noreferrer_blank">
          Website
        </Button>
      </section>
    </section>
  </Wrapper>
)

export default BusinessPage
