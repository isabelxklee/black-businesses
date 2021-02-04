import styled from 'styled-components'
import {ReactComponent as MapPinSVG} from '../../assets/map-pin.svg'

export const TileInformation = styled.div`
  margin: 20px 0;
`

export const AddressContainer = styled.div`
  margin: 0;
  display: flex;
  padding: 10px 0;
  align-items: center;
`

export const Address = styled.p`
  margin: 0 4px;
`

export const TileCard = styled.div`
  @media (max-width: 700px) {
    border-bottom: 3px solid #ce1e20;
    padding: 16px 0 40px 0;
  }

  :first-child {
    padding: 0 0 40px 0;
  }

  :last-child {
    border-bottom: none;
  }
`

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

export const Tag = styled.li`
  border-radius: 2rem;
  font-size: 12px;
  padding: 8px 10px;
  margin: 0 10px 0 0;
  border: 2px solid #ce1e20;
  background-color: transparent;
  text-align: center;
  display: inline-block;
  font-weight: 700;
`

export const Pin = styled(MapPinSVG)`
  width: 14px;
  object-fit: cover;
`
