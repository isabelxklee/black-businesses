import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 85%;
  margin: 80px 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 60px 0 0 0;
  }
`

export const Tile = styled.div`
  width: 85%;
  margin-bottom: 80px;
`
