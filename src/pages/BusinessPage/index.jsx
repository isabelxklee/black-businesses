import React from 'react'
import PropTypes from 'prop-types'
import {Container, Wrapper} from './styles'
import {
  H1,
  H4,
  P,
  Ul,
  Address,
  AddressContainer,
  Tag,
  Pin,
  ImageContainer,
  Image,
} from '../../styles'
import {ExternalLink} from '../../components/Links'
import {InternalLink} from '../../components/Links/styles'

const BusinessPage = ({business}) => (
  <Wrapper>
    <InternalLink to="/">Back to view all businesses</InternalLink>

    <Container>
      <ImageContainer>
        <Image src={business.image_url} alt={business.title} />
      </ImageContainer>

      <div>
        <H1>{business.title}</H1>
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
        <H4>Tags: </H4>
        <Ul>
          {business.categories.map((category) => (
            <Tag key={category} id={category}>
              {category}
            </Tag>
          ))}
        </Ul>

        <div>
          <H4>Full address: </H4>
          <P>{business.address ? business.address : null}</P>
          <P>
            {business.city}, {business.state}
          </P>
        </div>
      </div>
    </Container>
  </Wrapper>
)

BusinessPage.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessPage
