import styled from 'styled-components'

const PrimaryTag = styled.nav`
  background-color: ${({$isSelected}) => ($isSelected ? '#9b1616' : '#ea4a4a')};
  color: white;
  border-radius: 2rem;
  padding: 0.6rem 1.4rem;
  margin: 0.8rem 0.6rem 0 0;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
  @media only screen and (max-width: 700px) {
    margin: 0.6rem 0.6rem 0 0;
  }
`

export default PrimaryTag
