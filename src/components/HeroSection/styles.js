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
  background-color: #fcdfdd;
  text-align: center;
  height: 600px;
  padding: 0 100px;

  @media (max-width: 700px) {
    height: unset;
    padding: 90px 30px;
  }
`

export const Text = styled.div`
  transform: translateY(100%);

  @media (max-width: 1000px) {
    transform: translateY(50%);
  }

  @media (max-width: 700px) {
    transform: translateY(0%);
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 600px;

  @media (max-width: 700px) {
    height: 320px;
  }
`
