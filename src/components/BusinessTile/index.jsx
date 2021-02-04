import React from 'react'
import PropTypes from 'prop-types'
import {ExternalLink} from '../Links'
import {
  Address,
  AddressContainer,
  TileInformation,
  TileCard,
  ImageContainer,
  Image,
  Tag,
} from './styles'
import {MapPin} from '../CustomMarker/styles'
import {H3, P, Ul} from '../../styles'

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
      <Image src={business.image_url} alt={business.title} />
    </ImageContainer>

    <Tags business={business} />
    <TileInformation>
      <H3>{business.title}</H3>
      <AddressContainer>
        <MapPin />
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
