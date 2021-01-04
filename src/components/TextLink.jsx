import styled from 'styled-components'

const TextLink = styled.a`
  color: #EA4A4A;;
  font-family: 'Calistoga', cursive;
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

export default TextLink