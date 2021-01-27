import styled from 'styled-components'
import Image from './Image.jsx'

const HeroImage = styled(Image)`
  width: 100%;
  height: 600px;

  @media (max-width: 700px) {
    height: 320px;
  }
`

export default HeroImage
