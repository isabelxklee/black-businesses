import styled from 'styled-components'

const BusinessImage = styled.img`
  width: ${({$isOnMap}) => ($isOnMap ? '38px' : '14px')};
  object-fit: cover;
  width: 284px;
  height: 284px;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export default BusinessImage
