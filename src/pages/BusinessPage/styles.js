import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 48px 100px;
  background-color: ${({theme}) => theme.background};

  @media (max-width: 1000px) {
    padding: 48px 24px;
  }
  @media (max-width: 700px) {
    padding: 48px 24px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
  }
`
