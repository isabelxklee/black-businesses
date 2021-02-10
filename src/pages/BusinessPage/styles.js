import styled from 'styled-components'
import {H4} from '../../styles'

export const Wrapper = styled.div`
  padding: 48px 100px;
  background-color: ${({theme}) => theme.background};

  @media (max-width: 1000px) {
    padding: 48px 24px;
  }
  @media (max-width: 700px) {
    padding: 48px 24px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  margin-top: 30px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
  }
`

export const Section = styled.div`
  margin-bottom: 40px;
`

export const H42 = styled(H4)`
  margin-bottom: 8px;
`

export const InternalLink = styled.a`
  font-family: 'Calistoga', cursive;
  font-weight: 400;
  color: ${({theme}) => theme.primary};
  font-size: 20px;
  transition: 0.3s;
  margin: 0;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    display: none;
  }
`
