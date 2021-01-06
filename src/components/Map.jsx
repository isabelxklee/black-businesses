import React, {Component} from 'react'
import {func} from 'prop-types'
import {IBusinesses, IMapState} from '../types'
import mapboxgl from 'mapbox-gl'
import PlacesList from './PlacesList.jsx'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  componentDidMount() {
    const {style, long, lat, zoom} = this.props.app
    const map = new mapboxgl.Map({
      container: 'map',
      style: style,
      center: [long, lat],
      zoom: zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.props.setMap(map)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.places !== this.props.places) {
      this.props.places.map((place) => {
        const marker = new mapboxgl.Marker({
          color: '#ea4a4a',
        })
        marker.setLngLat(place.coordinates)
        marker.addTo(this.props.map)

        const popup = new mapboxgl.Popup({offset: 0}).setHTML(
          `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
                <p class="popup">${place.address}</p>
                <p class="popup">${place.city}, ${place.state}</p>`
        )

        marker.setPopup(popup)
      })
    }
  }

  // TODO:
  // 1. do we need to keep updating the markers each time?
  // 2. should we keep track of markers to remove old ones if we update?

  render() {
    return (
      <section>
        <PlacesList places={this.props.places} map={this.props.map} />
        <section id="map" className="map-container" />
      </section>
    )
  }
}

Map.propTypes = {
  places: IBusinesses.isRequired,
  app: IMapState.isRequired,
  map: IMapState,
  setMap: func.isRequired,
}

export default Map
