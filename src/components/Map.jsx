import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {IBusinesses} from '../types.js'
import ReactMapGl, {NavigationControl} from 'react-map-gl'
import PlacesList from './PlacesList.jsx'
import CustomPopup from './CustomPopup.jsx'
import CustomMarker from './CustomMarker.jsx'
const accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    showPopup: false,
    selectedMarker: null,
    viewport: {
      width: '100%',
      height: 600,
      latitude: 39.0626831,
      longitude: -101.642682,
      zoom: 2,
    },
  }

  // openPopup = (key) => {
  //   this.setSelectedMarker(key)
  // }

  setSelectedMarker = (place) => {
    this.setState({
      selectedMarker: place,
    })
  }

  render() {
    const {places, selectedMarker} = this.props
    console.log(selectedMarker)

    return (
      <div>
        <div className="map-header">
          <h2>Map View</h2>
        </div>
        <PlacesList places={places} map={this.state.map} />
        <ReactMapGl
          {...this.state.viewport}
          mapboxApiAccessToken={accessToken}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          <div style={{position: 'absolute', right: 0}}>
            <NavigationControl showCompass={false} />
          </div>
          {selectedMarker && (
            <CustomPopup
              place={selectedMarker}
              // closePopup={this.closePopup}
            />
          )}
          {places.map((place) => (
            <CustomMarker key={place.id} place={place} setSelectedMarker={this.setSelectedMarker} />
          ))}
        </ReactMapGl>
      </div>
    )
  }
}

Map.propTypes = {
  places: IBusinesses.isRequired,
  selectedMarker: PropTypes.object,
}

export default Map
