import styled from 'styled-components'

const SidePanel = styled.section`
  background-color: white;
  z-index: 1;
  overflow: auto;
  position: absolute;
  left: 1rem;
  height: 50%;
  margin-top: 40px;
  border-radius: 0.6rem;
  border: 3px solid #ea4a4a;

  @media (max-width: 700px) {
    display: none;
  }
`

export default SidePanel
