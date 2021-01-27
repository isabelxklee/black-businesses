import styled from 'styled-components'

const UL = styled.ul`
  margin: 0;
  padding: 0;
  li:last-child {
    border: none;
  }

  @media (max-width: 700px) {
    margin: 0.6rem 0;
    font-size: 1.2rem;
  }
`

export default UL
