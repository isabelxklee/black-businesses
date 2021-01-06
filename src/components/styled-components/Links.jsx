import styled from 'styled-components'

const Links = styled.section`
  float: right;
  display: inline-flex;
  @media only screen and (max-width: 700px) {
    background: linear-gradient(0deg, rgba(251, 237, 241, 1) 70%, rgba(251, 237, 241, 0) 100%);
    position: fixed;
    bottom: 0;
    width: -webkit-fill-available;
    left: 0;
    padding: 3rem 0.4rem;
    text-align: center;
    z-index: 2;
  }
`

export default Links
