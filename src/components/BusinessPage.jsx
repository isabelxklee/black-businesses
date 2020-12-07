import React from 'react'
import Button from './Button.jsx'
import Wrapper from './Wrapper.jsx'

const BusinessPage = (props) => {
  const {title, description, address, city, state, website} = props.business

  return (
    <Wrapper>
      <h3>{title}</h3>
      <section className="category-container">{props.PrimaryTags}</section>
      <p>{description}</p>
      <p className="address">{address ? address : null}</p>
      <p className="address">
        {city}, {state}
      </p>
      <Button href={website} target="noreferrer_blank">
        Website
      </Button>
    </Wrapper>
  )
}

export default BusinessPage
