import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'

class PlaceMarker extends Component {
  createMarker = () => {
    const app = this.props.app
    const place = this.props.place

    if (place.coordinates !== null && app) {
      new mapboxgl.Marker()
      .setLngLat([place.coordinates[0], place.coordinates[1]])
      .setPopup(
        new mapboxgl.Popup({clasName: 'mapbox-popup'}).setHTML(
          `<h3 class="popup"><a href=${place.website} class="popup" target="noreferrer_blank">${place.title}</a></h3><p class="popup">${place.address}</p><p class="popup">${place.city}, ${place.state}</p>`
        )
      )
      .addTo(app.map)
    }
  }

  // goTo() {
  //   const app = this.props.app
  //   const map = app.state.map
  //   const place = this.props.place

  //   map.flyTo({
  //     center: [place.longitude, place.latitude],
  //     zoom: 10,
  //   })
  // }

  render() {
    // if (map) {
    //   const popup = new mapboxgl.Popup({
    //     closeButton: false,
    //   })

    //   popup.setHTML(place.title)

    //   const marker = new mapboxgl.Marker({
    //     color: '#2727e6',
    //   })

    //   marker.setLngLat([place.coordinates[0], place.coordinates[1]])
    //   marker.setPopup(popup)
    //   marker.addTo(map)
    // }

    console.log(this.props.place)

    return (
      // <div
      //   className="place-item"
      //   // onClick={() => this.goTo()}
      // >
      //   {place.title} ({place.coordinates[0]}, {place.coordinates[1]})
      // </div>
      <>
        hello world
        {this.createMarker()}
      </>
    )
  }
}

export default PlaceMarker
