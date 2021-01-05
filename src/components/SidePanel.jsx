import styled from 'styled-components'

const SidePanel = styled.section`
  background-color: white;
  z-index: 1;
  width: 20%;
  overflow: auto;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  height: 70%;
  border-radius: 0.6rem;
  border: 3px solid #ea4a4a;

  @media only screen and (max-width: 700px) {
    bottom: 3rem;
    width: -webkit-fill-available;
    border-radius: 0;
    margin: 0 0 0.6rem 0;
    height: 10rem;
  }
`

export default SidePanel