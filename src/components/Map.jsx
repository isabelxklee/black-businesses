import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import PlacesList from './PlacesList.jsx'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

const Map = ({mapState, places, setMap}) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: mapState.style,
      center: [mapState.long, mapState.lat],
      zoom: mapState.zoom,
    })

    const navigationControl = new mapboxgl.NavigationControl()
    map.addControl(navigationControl)

    setMap(map)
  }, [])

  // TODO:
  // 1. do we need to keep updating the markers each time?
  // 2. should we keep track of markers to remove old ones if we update?
  places.map((place) => {
    const marker = new mapboxgl.Marker({
      color: '#ea4a4a',
    })
    marker.setLngLat(place.coordinates)
    marker.addTo(mapState.map)

    const popup = new mapboxgl.Popup({offset: 0}).setHTML(
      `<h3 class="popup"><a href=${place.website} target="noreferrer_blank" class="popup">${place.title}</a></h3>
            <p class="popup">${place.address}</p>
            <p class="popup">${place.city}, ${place.state}</p>`
    )

    marker.setPopup(popup)
  })

  return (
    <section>
      <PlacesList places={places} map={mapState.map} />
      <section id="map" className="map-container" />
    </section>
  )
}

export default Map
