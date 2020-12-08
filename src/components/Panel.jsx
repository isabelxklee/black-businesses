import React, {Component} from 'react'
import styled from 'styled-components'
import PanelChild from './PanelChild.jsx'

const List = styled.ul`
  list-style: none;
`

const Panel = (props) => {
  let placesList = []

  if (props.places) {
    placesList = props.places.map((place, index) => {
      return <PanelChild key={index} place={place} map={props.map} />
    })
  }

  return (
      <section className="panel">
        <List>{placesList}</List>
      </section>
  )
}

export default Panel