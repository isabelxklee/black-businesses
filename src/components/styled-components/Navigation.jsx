import styled from 'styled-components'

const Navigation = styled.header`
  background-color: #fff;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  @media (max-width: 700px) {
    /* height: 4rem;
    padding: 1rem 2rem; */
  }
`

export default Navigation
