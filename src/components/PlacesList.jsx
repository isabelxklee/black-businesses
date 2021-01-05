import React from 'react'
import SidePanel from './styled-components/SidePanel.jsx'
import PanelItem from './PanelItem.jsx'

const PlacesList = ({places, map}) => (
  <SidePanel>
    <ul>
      {places.map((place, index) => (
        <PanelItem key={index} place={place} map={map} />
      ))}
    </ul>
  </SidePanel>
)

export default PlacesList
