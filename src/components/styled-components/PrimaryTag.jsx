import styled from 'styled-components'

const PrimaryTag = styled.nav`
  background-color: ${({$isSelected}) => ($isSelected ? '#ce1e20' : '#F7CAC7')};
  color: ${({$isSelected}) => ($isSelected ? '#FFF' : '#ce1e20')};
  font-weight: 700;
  border-radius: 2rem;
  padding: 0.6rem 1.4rem;
  margin: 0.8rem 0.6rem 0 0;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  display: inline-block;

  @media (max-width: 700px) {
    margin: 0.6rem 0.6rem 0 0;
  }
`

export default PrimaryTag
