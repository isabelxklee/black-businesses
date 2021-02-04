import styled from 'styled-components'
import {Ul as BaseUl} from '../../styles'

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

export const Ul = styled(BaseUl)`
  flex-direction: column;
  flex-wrap: nowrap;

  @media (max-width: 700px) {
    margin: 0.6rem 0;
    font-size: 1.2rem;
  }
`

export const Li = styled.li`
  padding: 20px 25px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 2px solid #ce1e20;

  :hover {
    background-color: #fdeceb;
  }

  :last-child {
    border-bottom: none;
  }
`
