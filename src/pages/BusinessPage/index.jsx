import React from 'react'
import PropTypes from 'prop-types'
import {Container, Wrapper, Section, H42, InternalLink, Desktop, Mobile} from './styles'
import {
  H1,
  P,
  P2,
  Ul,
  Address,
  AddressContainer,
  Tag,
  Pin,
  ImageContainer,
  Image,
} from '../../styles'
import {ExternalLink} from '../../components/Links'

const BusinessPage = ({business}) => (
  <Wrapper>
    <Desktop>
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
            <P2>{business.description}</P2>
          </div>
          <ExternalLink href={business.website}>Visit site</ExternalLink>
        </div>

        <div>
          <Section>
            <H42>Tags: </H42>
            <Ul>
              {business.categories.map((category) => (
                <Tag key={category} id={category}>
                  {category}
                </Tag>
              ))}
            </Ul>
          </Section>

          <Section>
            <H42>Full address: </H42>
            <P>{business.address ? business.address : null}</P>
            <P>
              {business.city}, {business.state}
            </P>
          </Section>
        </div>
      </Container>
    </Desktop>

    <Mobile>
      <H1>{business.title}</H1>
      <AddressContainer>
        <Pin />
        <Address>
          {business.city}, {business.state}
        </Address>
      </AddressContainer>
      <ImageContainer>
        <Image src={business.image_url} alt={business.title} />
      </ImageContainer>
      <P2>{business.description}</P2>
      <ExternalLink href={business.website}>Visit site</ExternalLink>
      <Section>
        <H42>Tags: </H42>
        <Ul>
          {business.categories.map((category) => (
            <Tag key={category} id={category}>
              {category}
            </Tag>
          ))}
        </Ul>
      </Section>

      <Section>
        <H42>Full address: </H42>
        <P>{business.address ? business.address : null}</P>
        <P>
          {business.city}, {business.state}
        </P>
      </Section>
    </Mobile>
  </Wrapper>
)

BusinessPage.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessPage
