import styled from 'styled-components'
import PrimaryTag from './PrimaryTag'

const SecondaryTag = styled(PrimaryTag)`
  cursor: default;
  font-size: 12px;
  padding: 8px 10px;
  margin: 10px 10px 0 0;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`

export default SecondaryTag
