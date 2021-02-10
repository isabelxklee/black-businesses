import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  margin: 0 0 20px 0;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
`
