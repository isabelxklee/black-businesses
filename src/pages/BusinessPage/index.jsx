import React from 'react'
import PropTypes from 'prop-types'
import {Address, AddressContainer, ImageContainer, Image, Tag, Pin} from './styles'
import {ExternalLink} from '../../components/Links'
import {InternalLink} from '../../components/Links/styles'

const BusinessPage = ({business}) => (
  <>
    <div>
      <InternalLink to="/">Back to view all businesses</InternalLink>

      <div>
        <ImageContainer>
          <Image src={business.image_url} alt={business.title} />
        </ImageContainer>

        <div>
          <h1>{business.title}</h1>

          <AddressContainer>
            <Pin />
            <Address>
              {business.city}, {business.state}
            </Address>
          </AddressContainer>

          <div>
            <p>{business.description}</p>
          </div>
          <ExternalLink href={business.website}>Visit site</ExternalLink>
        </div>

        <div>
          <h4>Tags: </h4>
          <ul>
            {business.categories.map((category) => (
              <Tag key={category} id={category}>
                {category}
              </Tag>
            ))}
          </ul>

          <div>
            <h4>Full address: </h4>
            <p>{business.address ? business.address : null}</p>
            <p>
              {business.city}, {business.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

BusinessPage.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessPage
