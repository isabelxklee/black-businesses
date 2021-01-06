import React from 'react'
import {Link} from 'react-router-dom'
import Card from './styled-components/Card.jsx'
import SecondaryTag from './styled-components/SecondaryTag.jsx'
import Button from './styled-components/Button.jsx'

const Tags = ({business}) =>
  business.categories.map((category) => (
    <SecondaryTag key={category} id={category}>
      {category}
    </SecondaryTag>
  ))

const BusinessTile = ({business}) => (
  <Card>
    <Link to={`businesses/${business.id}`}>
      <img src={business.image_url} alt={business.title} className="tile-image" />
    </Link>
    <section className="tile-info">
      <section className="category-container">
        <Tags business={business} />
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

export default BusinessTile
