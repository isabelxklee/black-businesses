import styled from 'styled-components'
import Image from './Image.jsx'

const Logo = styled(Image)`
  width: 200px;
  margin: auto;
  display: inline-block;

  @media (max-width: 700px) {
    width: 140px;
    margin: auto;
  }
`

export default Logo
