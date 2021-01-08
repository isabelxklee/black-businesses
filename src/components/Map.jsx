import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {IMapState, IBusinesses} from '../types'
import mapboxgl from 'mapbox-gl'
import PlacesList from './PlacesList.jsx'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    map: null,
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: this.props.style,
      center: [this.props.long, this.props.lat],
      zoom: this.props.zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    this.setState({
      map: map
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.places !== this.props.places) {
      this.props.places.map((place) => {
        const marker = new mapboxgl.Marker({
          color: '#ea4a4a',
        })
        marker.setLngLat(place.coordinates)
        marker.addTo(this.state.map)

        const popup = new mapboxgl.Popup({offset: 0}).setHTML(
          `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
                <p class="popup">${place.address}</p>
                <p class="popup">${place.city}, ${place.state}</p>`
        )

        marker.setPopup(popup)
      })
    }
  }

  render() {
    return (
      <section>
        <PlacesList places={this.props.places} map={this.state.map} />
        <section id="map" className="map-container" />
      </section>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    places: globalState.placesInfo.places,
    long: globalState.mapInfo.long,
    lat: globalState.mapInfo.lat,
    zoom: globalState.mapInfo.zoom,
    style: globalState.mapInfo.style,
  }
}

Map.propTypes = {
  places: IBusinesses.isRequired,
  style: IMapState.isRequired,
  long: IMapState.isRequired,
  lat: IMapState.isRequired,
  zoom: IMapState.isRequired
}

export default connect(mapStateToProps, null)(withRouter(Map))