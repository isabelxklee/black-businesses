import React, {Component} from 'react'
import styled from 'styled-components'
import PanelChild from './PanelChild.jsx'

const List = styled.ul`
  list-style: none;
`

class Panel extends Component {
  render() {
    const places = this.props.places
    let placesList = []

    if (places) {
      placesList = places.map((place, index) => {
        return <PanelChild key={index} place={place} map={this.props.map}/>
      })
    }

    return (
      <section className="panel">
        <List>
          {placesList}      
        </List>
      </section>
    ) 
  }
}

export default Panel
