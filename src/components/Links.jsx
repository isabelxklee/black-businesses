import styled from 'styled-components'

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

export default Links
