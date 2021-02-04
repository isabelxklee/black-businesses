import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 48px 100px;
  background-color: ${({theme}) => theme.background};

  @media (max-width: 700px) {
    padding: 40px 30px;
  }
`
