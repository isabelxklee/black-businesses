import styled from 'styled-components'

const BusinessTileCard = styled.div`
  width: 85%;

  @media (max-width: 700px) {
    width: 100%;
    border-bottom: 3px solid #ce1e20;
    padding: 16px 0 40px 0;
  }

  :last-child {
    border-bottom: none;
  }
`

export default BusinessTileCard
