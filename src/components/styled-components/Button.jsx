import styled from 'styled-components'

const Button = styled.a`
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 0.2rem;
  padding: 0.6rem;
  margin: 1rem 0;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.5;
  }
`

export default Button
