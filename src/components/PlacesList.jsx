import React from 'react'
import PropTypes from 'prop-types'
import {IBusinesses} from '../types'
import SidePanel from './styled-components/SidePanel.jsx'
import PanelChild from './PanelChild.jsx'

const PlacesList = ({places, flyToLocation}) => (
  <SidePanel>
    <ul>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} flyToLocation={flyToLocation} />
      ))}
    </ul>
  </SidePanel>
)

PlacesList.propTypes = {
  places: IBusinesses.isRequired,
  flyToLocation: PropTypes.func,
}

export default PlacesList
