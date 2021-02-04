import styled from 'styled-components'
import {ReactComponent as MapPinSVG} from '../../assets/map-pin.svg'

export const MapPin = styled(MapPinSVG)`
  cursor: pointer;
  object-fit: cover;
  width: 38px;

  @media (max-width: 1000px) {
    width: 32px;
  }
`
