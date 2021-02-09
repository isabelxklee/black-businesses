import styled from 'styled-components'
import smallCheckSrc from '../../assets/small-check.svg'
import largeCheckSrc from '../../assets/large-check.svg'

const Check = styled.div`
  background-repeat: repeat-x;
  width: 100%;
`

export const SmallCheck = styled(Check)`
  background-image: url(${smallCheckSrc});
  background-size: auto 40px;
  height: 40px;
`

export const LargeCheck = styled(Check)`
  background-image: url(${largeCheckSrc});
  background-size: auto 62px;
  height: 62px;
`
