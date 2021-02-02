import styled from 'styled-components'

const MapPin = styled.img`
  width: ${({$isOnMap}) => ($isOnMap ? '38px' : '14px')};
  object-fit: cover;

  @media (max-width: 1000px) {
    width: ${({$isOnMap}) => ($isOnMap ? '32px' : '14px')};
  }
`

export default MapPin
