import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const TextContainer = styled.div`
  align-items: center;
  background-color: #fdeceb;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 600px;
  padding: 0 100px;

  @media (max-width: 700px) {
    height: unset;
    padding: 90px 30px;
  }
`

export const Text = styled.div`
  max-width: 440px;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 600px;

  @media (max-width: 700px) {
    height: 320px;
  }
`
