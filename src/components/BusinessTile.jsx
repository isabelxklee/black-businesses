import React from 'react'
import Card from './Card.jsx'
import CategoryTag from './CategoryTag.jsx'

const BusinessTile = ({business}) => {
  return (
    <Card>
      <img src={business.image} alt={business.title} className="tile-image"/>
      <h3>{business.title}</h3>
      <CategoryTag>{business.category}</CategoryTag>
      <p>{business.description}</p>
      <p>{business.address}, {business.city}</p>
      <p>{business.state}</p>
      <button>Website</button>
    </Card>
  )
}

export default BusinessTile
