import styled from 'styled-components'

export const TileInformation = styled.div`
  margin: 20px 0;
`

export const TileCard = styled.div`
  @media (max-width: 700px) {
    border-bottom: 3px solid ${({theme}) => theme.primary};
    padding: 16px 0 40px 0;
  }

  :first-child {
    padding: 0 0 40px 0;
  }

  :last-child {
    border-bottom: none;
  }
`
