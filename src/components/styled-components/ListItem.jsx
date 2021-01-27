import styled from 'styled-components'

const ListItem = styled.article`
  padding: 20px 25px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 2px solid #ce1e20;

  :last-child {
    border-bottom: none;
  }
`

export default ListItem
