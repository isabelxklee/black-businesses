import styled from 'styled-components'

const BusinessTileCard = styled.div`
  @media (max-width: 700px) {
    border-bottom: 3px solid #ce1e20;
    padding: 16px 0 40px 0;
  }

  :last-child {
    border-bottom: none;
  }
`

export default BusinessTileCard
