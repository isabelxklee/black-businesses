import styled from 'styled-components'

const HeroTextContainer = styled.div`
  background-color: #fcdfdd;
  text-align: center;
  height: 600px;
  padding: 0 100px;

  @media (max-width: 700px) {
    height: unset;
    padding: 90px 30px;
  }
`

export default HeroTextContainer
