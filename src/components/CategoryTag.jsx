import styled from 'styled-components'

const CategoryTag = styled.nav`
  background-color: black;
  color: white;
  border-radius: 0.2rem;
  padding: 0.6rem;
  margin: 0.8rem 0.4rem 0.8rem 0;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
	  opacity: 0.7;
  }
  
  &:active {
	  opacity: 0.5;
	}
  /* @media only screen and (max-width: 700px) {
    height: auto;
    padding: 1rem 2rem;
  } */
`

export default CategoryTag
