import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card.jsx'
import SecondaryTag from './SecondaryTag.jsx'
import Button from './Button.jsx'

const BusinessTile = ({business}) => {
  const renderPrimaryTags = () =>
    business.categories.map((category) => {
      return (
        <SecondaryTag key={category} id={category}>
          {category}
        </SecondaryTag>
      )
    })

  return (
    <Card>
      <Link to={`all-businesses/${business.id}`}>
        <img src={business.image_url} alt={business.title} className="tile-image" />
      </Link>
      <section className="tile-info">
        <section className="category-container">{renderPrimaryTags()}</section>
        <h3>{business.title}</h3>
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
}

export default BusinessTile
