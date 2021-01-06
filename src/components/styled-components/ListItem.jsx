import styled from 'styled-components'

const ListItem = styled.article`
  padding: 1.4rem 2rem;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 3px solid #ea4a4a;
  &:hover {
    background-color: #dadada;
  }

  :last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 700px) {
    padding: 0.6rem 1.4rem;
  }
`

export default ListItem
