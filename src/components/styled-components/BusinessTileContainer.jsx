import styled from 'styled-components'

const BusinessTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 100px;
  margin: 100px;
  background-color: #fff;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 100px 120px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    padding: 40px 30px;
    margin: 0;
  }
`

export default BusinessTileContainer
