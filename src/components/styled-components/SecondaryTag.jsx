import styled from 'styled-components'
import PrimaryTag from './PrimaryTag'

const SecondaryTag = styled(PrimaryTag)`
  cursor: default;
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  margin: 0.4rem 0.4rem 0 0;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`

export default SecondaryTag
