import React from 'react'
import {object} from 'prop-types'
import {IBusinesses} from '../types'
import SidePanel from './styled-components/SidePanel.jsx'
import PanelChild from './PanelChild.jsx'

const PlacesList = ({places, map}) => (
  <SidePanel>
    <ul>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} map={map} />
      ))}
    </ul>
  </SidePanel>
)

PlacesList.propTypes = {
  places: IBusinesses.isRequired,
  map: object,
}

export default PlacesList
