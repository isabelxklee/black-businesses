import styled from 'styled-components'

const ResourceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 85%;
  margin: 80px 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 60px 0;
  }
`

export default ResourceContainer
