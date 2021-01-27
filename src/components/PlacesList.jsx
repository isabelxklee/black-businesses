import React from 'react'
import PropTypes from 'prop-types'
import {IBusinesses} from '../types'
import SidePanel from './styled-components/SidePanel.jsx'
import PanelChild from './PanelChild.jsx'
import UL from './styled-components/UL.jsx'

const PlacesList = ({places, flyToLocation}) => (
  <SidePanel>
    <UL>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} flyToLocation={flyToLocation} />
      ))}
    </UL>
  </SidePanel>
)

PlacesList.propTypes = {
  places: IBusinesses.isRequired,
  flyToLocation: PropTypes.func,
}

export default PlacesList
