import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './styled-components/ListItem.jsx'
import H4 from './styled-components/H4.jsx'
import P from './styled-components/P.jsx'

const PanelChild = ({place, flyToLocation}) => {
  const handleClick = () => {
    flyToLocation(place.coordinates[0], place.coordinates[1], 14)
  }

  return (
    <ListItem onClick={handleClick}>
      <H4>{place.title}</H4>
      <P>
        {place.city}, {place.state}
      </P>
    </ListItem>
  )
}

PanelChild.propTypes = {
  place: PropTypes.object.isRequired,
  flyToLocation: PropTypes.func.isRequired,
}

export default PanelChild
