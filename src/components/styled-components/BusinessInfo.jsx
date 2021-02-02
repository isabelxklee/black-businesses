import styled from 'styled-components'
import BusinessTileInformation from './BusinessTileInformation.jsx'

const BusinessInfo = styled(BusinessTileInformation)`
  margin: 50px 0;

  :first-child {
    margin: 0 0 50px 0;
  }

  @media (max-width: 700px) {
    :first-child {
      margin: 50px 0;
    }
  }
`

export default BusinessInfo
