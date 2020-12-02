import React from 'react'
import PlaceMarker from './PlaceMarker.jsx'

const Panel = ({places}) => {
  console.log(places)






  return (
  <section className="panel">
   <p>hello world</p>
  </section>
  ) 
  // const places = this.props.app.state.places
  // let placeItems = <div className="no-results">Nothing added yet</div>

  // if (places.length > 0) {
  //   placeItems = places.map((place, index) => {
  //     return <PlaceMarker place={place} app={this.props.app} key={index}></PlaceMarker>
  //   })

  //   return <div className="places">{placeItems}</div>
  // }
}

export default Panel
