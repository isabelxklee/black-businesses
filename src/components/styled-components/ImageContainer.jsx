import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  margin: 0 0 20px 0;

  @media (max-width: 700px) {
    /* width: 100%;
    height: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '315px' : '284px')}; */
  }
`

export default ImageContainer
