import React from 'react'
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

export default PlacesList
