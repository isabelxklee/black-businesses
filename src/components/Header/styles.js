import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 0;
`

export const Logo = styled(LogoSVG)`
  object-fit: cover;
  width: 200px;
  margin: auto;
  display: inline-block;

  @media (max-width: 700px) {
    width: 140px;
    margin: auto;
  }
`

export const NavigationContainer = styled.div`
  border-bottom: 2px solid #ce1e20;
  border-top: 2px solid #ce1e20;
  text-align: center;
  margin: 0;
  padding: 16px;

  @media (max-width: 700px) {
    border-bottom: 2px solid #ce1e20;
    border-top: 2px solid #ce1e20;
    text-align: center;
    margin: 0;
    padding: 16px;
  }
`

export const Navigation = styled.header`
  background-color: #fff;
  display: block;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: inline-block;
    width: 100vw;
  }
`

export const H1 = styled.h1`
  margin: 0;
  font-size: 0;
  line-height: 0;
`
