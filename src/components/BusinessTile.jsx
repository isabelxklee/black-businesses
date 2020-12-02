import React from 'react'
import Card from './Card.jsx'
import CategoryTag from './CategoryTag.jsx'
import Button from './Button.jsx'

const BusinessTile = ({business, selectCategory}) => {
  const renderCategoryTags = () =>
    business.categories.map((category) => {
      return (
        <CategoryTag key={category} id={category} onClick={selectCategory}>
          {category}
        </CategoryTag>
      )
    })

  return (
    <Card>
      <img src={business.image_url} alt={business.title} className="tile-image" />
      <section className="tile-info">
        <h3>{business.title}</h3>
        <section className="category-container">{renderCategoryTags()}</section>
        <p>{business.description}</p>
        <p className="address">{business.address ? business.address : null}</p>
        <p className="address">{business.city}, {business.state}</p>
        <Button href={business.website} target="noreferrer_blank">Website</Button>
      </section>
    </Card>
  )
}

export default BusinessTile
