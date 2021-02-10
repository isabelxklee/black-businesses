import React from 'react'
import PropTypes from 'prop-types'
import {ExternalLink} from '../Links'
import {InternalLink} from '../Links/styles'
import {TileInformation, TileCard} from './styles'
import {H3, P, Ul, Tag, Pin, Address, AddressContainer, ImageContainer, Image} from '../../styles'

const Tags = ({business}) => (
  <Ul>
    {business.categories.map((category) => (
      <Tag key={category} id={category}>
        {category}
      </Tag>
    ))}
  </Ul>
)

Tags.propTypes = {
  business: PropTypes.object.isRequired,
}

const BusinessTile = ({business}) => (
  <TileCard>
    <ImageContainer>
      <InternalLink to={`businesses/${business.id}`}>
        <Image src={business.image_url} alt={business.title} />
      </InternalLink>
    </ImageContainer>

    <Tags business={business} />
    <TileInformation>
      <H3>{business.title}</H3>
      <AddressContainer>
        <Pin />
        <Address>
          {business.city}, {business.state}
        </Address>
      </AddressContainer>
    </TileInformation>
    <TileInformation>
      <P>{business.description}</P>
    </TileInformation>
    <ExternalLink href={business.website}>Visit site</ExternalLink>
  </TileCard>
)

BusinessTile.propTypes = {
  business: PropTypes.object.isRequired,
}

export default BusinessTile
