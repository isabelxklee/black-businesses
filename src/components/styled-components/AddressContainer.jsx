import styled from 'styled-components'

const AddressContainer = styled.div`
  margin: ${({$isOnBusinessPage}) => ($isOnBusinessPage ? '40px 0 20px 0' : '0')};
  display: flex;
  padding: 10px 0;
  align-items: center;
`

export default AddressContainer
