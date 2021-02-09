import React from 'react'
import PropTypes from 'prop-types'
import {SidePanel, Ul, Li} from './styles'
import {H4, P} from '../../styles'

const PanelChild = ({place, flyToAndOpen}) => {
  const handleClick = () => {
    flyToAndOpen(place)
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
  flyToAndOpen: PropTypes.func.isRequired,
}

const PlacesList = ({places, flyToAndOpen}) => (
  <SidePanel>
    <Ul>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} flyToAndOpen={flyToAndOpen} />
      ))}
    </Ul>
  </SidePanel>
)

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  flyToAndOpen: PropTypes.func.isRequired,
}

export default PlacesList
