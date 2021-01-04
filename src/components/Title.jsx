import styled from 'styled-components'

const Title = styled.h3`
  float: left;
  color: #EA4A4A;
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

export default Title