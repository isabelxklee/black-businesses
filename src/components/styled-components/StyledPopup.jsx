import {Popup} from 'react-map-gl'
import styled from 'styled-components'

const StyledPopup = styled(Popup)`
  border-radius: 5px;

  .mapboxgl-popup-content {
    padding: 30px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #ce1e20;
    color: white;
  }

  .mapboxgl-popup-tip {
    border-top-color: #ce1e20;
    margin-bottom: 30px;
  }
`

export default StyledPopup
