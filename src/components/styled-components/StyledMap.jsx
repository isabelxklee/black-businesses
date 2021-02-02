import ReactMapGl from 'react-map-gl'
import styled from 'styled-components'

const StyledMap = styled(ReactMapGl)`
  @media (max-width: 700px) {
    height: 500px;
  }
`

export default StyledMap
