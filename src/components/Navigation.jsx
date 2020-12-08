import styled from 'styled-components'

const Navigation = styled.header`
  background-color: black;
  top: 0;
  height: 4rem;
  margin: auto;
  padding: 1rem 3rem;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding: 0.4rem 2rem;
    background-color: transparent;
  }
`

export default Navigation