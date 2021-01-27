import styled from 'styled-components'
import Grid from './Grid.jsx'

const HeroGrid = styled(Grid)`
  grid-template-columns: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export default HeroGrid
