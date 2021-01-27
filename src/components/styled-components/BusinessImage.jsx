import styled from 'styled-components'
import Image from './Image.jsx'

const BusinessImage = styled(Image)`
  width: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '100%' : '284px')};
  height: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '400px' : '284px')};
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 100%;
    height: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '315px' : '284px')};
  }
`

export default BusinessImage
