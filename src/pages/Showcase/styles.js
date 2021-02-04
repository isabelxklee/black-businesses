import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 100px;
  margin: 100px;
  background-color: #fff;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    padding: 40px 30px;
    margin: 0;
  }
`

export const Nav = styled.nav`
  max-width: 550px;
`

export const Tag = styled.button`
  background-color: ${({$isSelected}) => ($isSelected ? '#ce1e20' : '#F7CAC7')};
  color: ${({$isSelected}) => ($isSelected ? '#FFF' : '#ce1e20')};
  font-weight: 700;
  border-radius: 2rem;
  border: none;
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
