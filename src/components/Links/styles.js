import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const InternalLink = styled(NavLink)`
  color: #ce1e20;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  transition: 0.3s;
  margin: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 700px) {
    margin: 0.6rem;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    font-weight: 600;
  }
`

export const Link = styled.a`
  color: #ce1e20;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  display: block;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`
