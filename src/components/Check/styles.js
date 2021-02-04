import styled from 'styled-components'
import smallCheckSrc from '../../assets/small-check.svg'
import largeCheckSrc from '../../assets/small-check.svg'

const Check = styled.div`
  background-repeat: repeat-x;
  background-size: contain;
  width: 100%;
`

export const SmallCheck = styled(Check)`
  background-image: url(${smallCheckSrc});
  height: 40px;
`

export const LargeCheck = styled(Check)`
  background-image: url(${largeCheckSrc});
  height: 62px;
`
