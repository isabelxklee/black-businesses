import styled from 'styled-components'

const MapPin = styled.img`
  width: ${({$isOnMap}) => ($isOnMap ? '38px' : '14px')};
  object-fit: cover;

  @media (max-width: 1000px) {
    width: 32px;
  }
`

export default MapPin
