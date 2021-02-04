import styled from 'styled-components'
import {ReactComponent as MapPinSVG} from '../../assets/map-pin.svg'

export const MapPin = styled(MapPinSVG)`
  width: ${({$isOnMap}) => ($isOnMap ? '38px' : '14px')};
  object-fit: cover;

  @media (max-width: 1000px) {
    width: ${({$isOnMap}) => ($isOnMap ? '32px' : '14px')};
  }
`
