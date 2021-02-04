import styled from 'styled-components'

export const SidePanel = styled.div`
  background-color: white;
  z-index: 1;
  overflow: auto;
  position: absolute;
  left: 3%;
  height: 50%;
  margin-top: 40px;
  border-radius: 10px;
  border: 3px solid #ce1e20;
  box-shadow: 16px 16px 0 -6px #ce1e20;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Li = styled.article`
  padding: 20px 25px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 2px solid #ce1e20;

  :last-child {
    border-bottom: none;
  }
`
