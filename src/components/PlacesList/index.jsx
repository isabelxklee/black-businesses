import React from 'react'
import PropTypes from 'prop-types'
import {SidePanel, Li} from './styles'
import {Ul, H4, P} from '../../styles'

const PanelChild = ({place, flyToLocation}) => {
  const handleClick = () => {
    flyToLocation(place.coordinates[0], place.coordinates[1], 14)
  }

  return (
    <Li onClick={handleClick}>
      <H4>{place.title}</H4>
      <P>
        {place.city}, {place.state}
      </P>
    </Li>
  )
}

PanelChild.propTypes = {
  place: PropTypes.object.isRequired,
  flyToLocation: PropTypes.func.isRequired,
}

const PlacesList = ({places, flyToLocation}) => (
  <SidePanel>
    <Ul>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} flyToLocation={flyToLocation} />
      ))}
    </Ul>
  </SidePanel>
)

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  flyToLocation: PropTypes.func.isRequired,
}

export default PlacesList
