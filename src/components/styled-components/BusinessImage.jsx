import styled from 'styled-components'

const BusinessImage = styled.img`
  object-fit: cover;
  width: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '100%' : '284px')};
  height: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '400px' : '284px')};
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export default BusinessImage
