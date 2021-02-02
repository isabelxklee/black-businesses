import styled from 'styled-components'
import Image from './Image.jsx'

const TileImage = styled(Image)`
  width: 400px;
  position: absolute;

  @media (max-width: 1000px) {
    width: 250px;
  }

  @media (max-width: 700px) {
    width: 100px;
  }
`

export default TileImage
