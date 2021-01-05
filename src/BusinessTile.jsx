import React from 'react'
import {Link} from 'react-router-dom'
import Card from './components/Card.jsx'
import PrimaryTag from './components/PrimaryTag.jsx'
import Button from './components/Button.jsx'

const BusinessTile = ({business}) => {
  const renderTags = () =>
    business.categories.map((category) => {
      return (
        <PrimaryTag key={category} id={category}>
          {category}
        </PrimaryTag>
      )
    })

  return (
    <Card>
      <Link to={`businesses/${business.id}`}>
        <img src={business.image_url} alt={business.title} className="tile-image" />
      </Link>
      <section className="tile-info">
        <section className="category-container">{renderTags()}</section>
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
}

export default BusinessTile
