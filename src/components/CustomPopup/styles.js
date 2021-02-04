import styled from 'styled-components'
import {Popup} from 'react-map-gl'
import {H3} from '../../styles'

export const StyledPopup = styled(Popup)`
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

export const PopupH3 = styled(H3)`
  font-size: 20px;
  margin: 0 0 8px 0;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`
