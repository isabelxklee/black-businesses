import React, {Component} from 'react'
import {IBusinesses} from '../types.js'
import ReactMapGl, {Marker, NavigationControl} from 'react-map-gl'
// import ReactMapGl, {Marker, NavigationControl, Popup} from 'react-map-gl'
import PlacesList from './PlacesList.jsx'
import mapPin from '../assets/map-pin.svg'
const accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    showPopup: false,
    viewport: {
      width: '100%',
      height: 600,
      latitude: 39.0626831,
      longitude: -101.642682,
      zoom: 2,
    },
  }

  handleClick = () => {
    this.setState((state) => ({
      showPopup: !state.showPopup,
    }))

    // showPopup && (
    //   <Popup
    //     latitude={37.78}
    //     longitude={-122.41}
    //     closeButton={true}
    //     closeOnClick={false}
    //     onClose={() => this.setState({showPopup: false})}
    //     anchor="top"
    //   >
    //     <div>You are here</div>
    //   </Popup>
    // )}
  }

  render() {
    const {places} = this.props

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
          {places.map((place) => (
            <Marker
              key={place.id}
              latitude={place.coordinates[1]}
              longitude={place.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
              onClick={this.handleClick}
            >
              <img src={mapPin} />
            </Marker>
          ))}
        </ReactMapGl>
      </div>
    )
  }
}

Map.propTypes = {
  places: IBusinesses.isRequired,
}

export default Map
