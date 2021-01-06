import React from 'react'
import {IBusiness} from '../types'
import {Link} from 'react-router-dom'
import BusinessTags from './BusinessTags'
import Card from './styled-components/Card.jsx'
import Button from './styled-components/Button.jsx'

const BusinessTile = ({business}) => (
  <Card>
    <Link to={`businesses/${business.id}`}>
      <img src={business.image_url} alt={business.title} className="tile-image" />
    </Link>
    <section className="tile-info">
      <section className="category-container">
        <BusinessTags business={business} />
      </section>
      <Link to={`businesses/${business.id}`}>
        <h3>{business.title}</h3>
      </Link>
      <section className="address">
        <p className="address">{business.address ? business.address : null}</p>
        <p className="address">
          {business.city}, {business.state}
        </p>
      </section>
      <Button href={business.website} target="noreferrer_blank">
        Website
      </Button>
    </section>
  </Card>
)

BusinessTile.propTypes = {
  business: IBusiness.isRequired,
}

export default BusinessTile
