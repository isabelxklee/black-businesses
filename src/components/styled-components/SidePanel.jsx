import styled from 'styled-components'

const SidePanel = styled.section`
  background-color: white;
  z-index: 1;
  width: 20%;
  overflow: auto;
  position: absolute;
  left: 1rem;
  height: 70%;
  margin-top: 40px;
  border-radius: 0.6rem;
  border: 3px solid #ea4a4a;

  @media (max-width: 700px) {
    bottom: 15%;
    width: -webkit-fill-available;
    border-radius: 0;
    margin: 0 0 0.6rem 0;
    height: 10rem;
    left: 0;
  }
`

export default SidePanel
