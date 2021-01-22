import React from 'react'
import {Popup} from 'react-map-gl'
import PropTypes from 'prop-types'

// const CustomPopup = ({place, closePopup}) => {
//   return (
//     <Popup
//       latitude={place.latitude}
//       longitude={place.longitude}
//       onClose={closePopup}
//       closeButton={true}
//       closeOnClick={false}
//       offsetTop={-30}
//     >
//       <p>{place.title}</p>
//     </Popup>
//   )
// }

const CustomPopup = ({place}) => {
  return (
    <Popup
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      // onClose={closePopup}
      closeButton={true}
      offsetTop={-30}
    >
      <p>{place.title}</p>
    </Popup>
  )
}

export default CustomPopup

CustomPopup.propTypes = {
  place: PropTypes.object,
  // closePopup: PropTypes.func,
}
