import React from 'react'
import PanelChild from './PanelChild.jsx'

const Panel = ({places, map}) => (
  <section className="panel">
    <ul>
      {places.map((place) => (
        <PanelChild key={place.id} place={place} map={map} />
      ))}
    </ul>
  </section>
)

export default Panel