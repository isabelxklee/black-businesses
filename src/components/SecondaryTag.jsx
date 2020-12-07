import styled from 'styled-components'
import PrimaryTag from './PrimaryTag'

const SecondaryTag = styled(PrimaryTag)`
  background-color: brown;
  cursor: default;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
  @media only screen and (max-width: 700px) {
    margin: 0.6rem 0.6rem 0 0;
  }
`

export default SecondaryTag
