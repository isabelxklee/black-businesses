import styled from 'styled-components'

const TextLink = styled.a`
  color: #ce1e20;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

export default TextLink
