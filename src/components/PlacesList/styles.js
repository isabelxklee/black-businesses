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
    border-left: none;
    border-right: none;
    border-radius: 0;
    box-shadow: none;
    position: relative;
    height: 400px;
    left: auto;
    margin: 0;
    width: 100vw;
  }
`

export const Ul = styled(BaseUl)`
  flex-direction: column;
  flex-wrap: nowrap;
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

  @media (max-width: 700px) {
    padding: 10px 20px;
  }
`
