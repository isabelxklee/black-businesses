import styled from 'styled-components'

const HeroText = styled.div`
  transform: translateY(100%);

  @media (max-width: 1000px) {
    transform: translateY(50%);
  }

  @media (max-width: 700px) {
    transform: translateY(0%);
  }
`

export default HeroText
