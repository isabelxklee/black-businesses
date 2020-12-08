import React from 'react'
import Button from './Button.jsx'
import Wrapper from './Wrapper.jsx'

const BusinessPage = (props) => {
  const {title, description, address, city, state, website, image_url} = props.business

  return (
    <Wrapper>
      <section className="business-page">
        <section className="column">
          <img src={image_url} alt={title} className="business-page" />
        </section>
        <section className="column">
          <section className="category-container">{props.businessTags}</section>
          <h1 className="business-page">{title}</h1>
          <p>{description}</p>

          <section className="address">
            <h3>Address</h3>
            <p className="address">{address ? address : null}</p>
            <p className="address">
              {city}, {state}
            </p>
          </section>
          <Button href={website} target="noreferrer_blank">
            Website
          </Button>
        </section>
      </section>
    </Wrapper>
  )
}

export default BusinessPage
