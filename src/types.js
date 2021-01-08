import {exact, number, string, object, arrayOf} from 'prop-types'

export const IBusiness = exact({
  id: number.isRequired,
  title: string.isRequired,
  categories: arrayOf(string).isRequired,
  address: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  coordinates: arrayOf(number).isRequired,
  description: string.isRequired,
  image_url: string.isRequired,
  website: string.isRequired,
})

export const IBusinesses = arrayOf(IBusiness)

export const IMapState = exact({
  long: number.isRequired,
  lat: number.isRequired,
  zoom: number.isRequired,
  style: string.isRequired,
  map: object,
})
