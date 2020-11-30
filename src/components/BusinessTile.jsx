import React from 'react'
import Card from './Card.jsx'

const BusinessTile = ({business}) => {
  return (
    <Card>
      <h3>{business.title}</h3>
      <p>{business.description}</p>
    </Card>
  )
}

export default BusinessTile
