import styled from 'styled-components'

export const MessageWrapper = styled.div`
  padding: 84px 30px;
  margin: 80px 0;
  background-color: ${({theme}) => theme.background};

  @media (max-width: 1000px) {
    padding: 120px 30px;
  }

  @media (max-width: 700px) {
    padding: 80px 30px;
    margin: 0;
  }
`

export const Message = styled.div`
  margin: 0 auto;
  max-width: 550px;
  text-align: center;
`
