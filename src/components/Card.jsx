import React from 'react'

const Card = ({business}) => {
  return (
    <section>
      <h3>{business.title}</h3>
      <p>{business.description}</p>
    </section>
  )
}

export default Card