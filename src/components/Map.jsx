import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {IBusinesses} from '../types.js'
import ReactMapGl from 'react-map-gl'
import PlacesList from './PlacesList.jsx'
import CustomPopup from './CustomPopup.jsx'
import CustomMarker from './CustomMarker.jsx'
import H2 from './styled-components/H2.jsx'
import StyledNavigationControl from './styled-components/StyledNavigationControl.jsx'
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
      zoom: 3,
    },
  }

  closePopup = () => {
    this.setState({
      selectedMarker: null,
    })
  }

  setSelectedMarker = (place) => {
    this.setState({
      selectedMarker: place,
    })
  }

  flyToLocation = (long, lat, zoom) => {
    this.setState({
      viewport: {
        width: '100%',
        height: 600,
        latitude: lat,
        longitude: long,
        zoom: zoom,
      },
    })
  }

  render() {
    const {places} = this.props
    const {selectedMarker} = this.state

    return (
      <div>
        <div className="map-header">
          <H2>Map View</H2>
        </div>
        <PlacesList places={places} flyToLocation={this.flyToLocation} />
        <ReactMapGl
          {...this.state.viewport}
          mapboxApiAccessToken={accessToken}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          <StyledNavigationControl showCompass={false} />
          {selectedMarker && <CustomPopup place={selectedMarker} closePopup={this.closePopup} />}
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
  flyToLocation: PropTypes.func,
}

export default Map
