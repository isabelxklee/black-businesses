import styled from 'styled-components'
import Grid from './Grid.jsx'

const BusinessPageContainer = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
  }
`

export default BusinessPageContainer
