import styled from 'styled-components'
import Grid from './Grid.jsx'

const BusinessPageContainer = styled(Grid)`
  grid-template-columns: 45% 25% 25%;
  grid-column-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: 50% 30% 25%;
    grid-column-gap: 40px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
  }
`

export default BusinessPageContainer
