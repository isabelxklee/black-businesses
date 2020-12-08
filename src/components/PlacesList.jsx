import React from 'react'
import styled from 'styled-components'
import PanelChild from './PanelChild.jsx'

const SidePanel = styled.section`
  background-color: white;
  color: black;
  z-index: 1;
  width: 20%;
  height: 20rem;
  overflow: auto;
  position: absolute;
  left: 0;
  height: 87%;
  
  @media only screen and (max-width: 700px) {
    bottom: 3rem;
    width: -webkit-fill-available;
    border-radius: 0;
    margin: 0;
    height: 10rem;
  }
`


const PlacesList = (props) => {
  const placesList = props.places.map((place, index) => {
    return <PanelChild key={index} place={place} map={props.map} />
  })

  return (
      <SidePanel>
        {placesList}
      </SidePanel>
  )
}

export default PlacesList