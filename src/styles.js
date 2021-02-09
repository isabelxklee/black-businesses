import styled, {createGlobalStyle} from 'styled-components'

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
  line-height: 1.4;
`

export const P2 = styled(P)`
  margin: 16px 0;
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
