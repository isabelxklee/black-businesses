import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 100%;
  padding: 0 0 20px;

  @media (max-width: 700px) {
    align-items: center;
  }
`

export const DesktopNav = styled.nav`
  align-items: center;
  display: flex;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`

export const MobileNav = styled.nav`
  display: none;

  @media (max-width: 700px) {
    border-bottom: 2px solid #ce1e20;
    border-top: 2px solid #ce1e20;
    display: flex;
    width: 100vw;
  }
`

export const Logo = styled(LogoSVG)`
  object-fit: cover;
  width: 200px;
  margin: 20px 0;
  display: inline-block;

  @media (max-width: 700px) {
    padding: 0 20px;
    width: 140px;
  }
`

export const H1 = styled.h1`
  margin: 0;
  font-size: 0;
  line-height: 0;
`
