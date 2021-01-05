import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Navigation = styled.header`
  background-color: black;
  top: 0;
  height: 4rem;
  margin: auto;
  padding: 1rem 3rem;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding: 0.4rem 2rem;
    background-color: transparent;
  }
`

const Title = styled.h3`
  float: left;
  color: white;
  margin: 1rem;
  font-weight: 600;
  font-size: 1.6rem;
  @media only screen and (max-width: 700px) {
    float: none;
    margin: 0.6rem 0;
    font-size: 1.2rem;
    color: black;
    position: fixed;
  }
`

const Links = styled.section`
  float: right;
  display: inline-flex;
  @media only screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
    background-color: black;
    width: -webkit-fill-available;
    left: 0;
    padding: 0.6rem 0.4rem;
    text-align: center;
    z-index: 2;
  }
`

const TextLink = styled.a`
  color: white;
  font-family: 'Karla', sans-serif;
  font-size: 1.2rem;
  transition: 0.3s;
  margin: 1rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 700px) {
    margin: 0.6rem;
    text-align: center;
    font-size: 1rem;
    width: 100%;
    font-weight: 600;
  }
`

const Header = () => (
  <Navigation>
    <Title>Black-Owned Food & Drink</Title>
    <Links>
      <Link to="/" component={TextLink}>
        Map
      </Link>
      <Link to="/all-businesses" component={TextLink}>
        Showcase
      </Link>
    </Links>
  </Navigation>
)

export default Header
