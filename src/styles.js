import styled, {createGlobalStyle} from 'styled-components'
import {ReactComponent as MapPinSVG} from './assets/map-pin.svg'

export const theme = {
  primary: '#CE1E20',
  secondary: '#F7CAC7',
  background: '#FDECEB',
  white: '#FFF',
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: ${({theme}) => theme.primary};
  }

  h1, h2, h3, h4 {
    font-family: 'Calistoga', cursive;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
`

export const P = styled.p`
  font-family: 'Rubik', sans-serif;
  margin: 0 0 4px 0;
  line-height: 1.2;
`

export const P2 = styled(P)`
  margin: 16px 0;
`

export const H1 = styled.h1`
  font-size: 48px;
  margin: 0;
  line-height: 1;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`

export const H2 = styled.h2`
  font-size: 48px;
  margin: 0 0 16px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`

export const H3 = styled.h3`
  font-size: 30px;
  margin: 0;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`

export const H4 = styled.h4`
  font-size: 20px;
  margin: 0 0 12px 0;
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const Tag = styled.li`
  border-radius: 2rem;
  font-size: 12px;
  padding: 8px 10px;
  margin: 0 10px 0 0;
  border: 2px solid ${({theme}) => theme.primary};
  background-color: transparent;
  text-align: center;
  display: inline-block;
  font-weight: 700;
`

export const Pin = styled(MapPinSVG)`
  width: 14px;
  object-fit: cover;
`

export const AddressContainer = styled.div`
  margin: 0;
  display: flex;
  padding: 10px 0;
  align-items: center;
`

export const Address = styled.p`
  margin: 0 4px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  margin: 0 0 20px 0;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`
