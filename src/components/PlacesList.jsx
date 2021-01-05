import React from 'react'
import SidePanel from './styled-components/SidePanel.jsx'
import PanelChild from './PanelChild.jsx'

const PlacesList = ({places, map}) => (
  <SidePanel>
    <ul>
      {places.map((place, index) => (
        <PanelChild key={index} place={place} map={map} />
      ))}
    </ul>
  </SidePanel>
)

export default PlacesList
