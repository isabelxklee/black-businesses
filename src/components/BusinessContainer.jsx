import React, {useState, useEffect} from 'react'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './PrimaryTag.jsx'
import Wrapper from './Wrapper.jsx'

const BusinessContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState([])
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    fetch('https://black-businesses-json.herokuapp.com/places')
      .then((response) => response.json())
      .then((placesArray) => {
        setBusinesses(placesArray)
      })
  }),
    [businesses]

  useEffect(() => {
    const array = []
    array.push('all')

    businesses.forEach((business) => {
      business.categories.forEach((category) => {
        array.push(category)
      })
    })

    setCategories([...new Set(array)])
  }),
    [categories]

  const filterBusinesses = () => {
    let filteredArray = []

    if (selectedCategory === 'all') {
      filteredArray = businesses
    } else {
      businesses.map((business) => {
        business.categories.map((category) => {
          category === selectedCategory ? filteredArray.push(business) : null
        })
      })
    }

    return filteredArray
  }

  const renderBusinesses = () =>
    filterBusinesses().map((business) => {
      <BusinessTile key={business.id} business={business} />
    })

  const renderAllTags = () =>
    categories.map((category) => {
      <PrimaryTag key={category} id={category} onClick={() => setSelectedCategory(category)}>
        {category}
      </PrimaryTag>
    })

  return (
    <Wrapper>
      <h1>All Businesses</h1>
      <h3>Filter by category</h3>
      <section className="category-container">{renderAllTags()}</section>
      <section className="business-tile-container">{renderBusinesses()}</section>
    </Wrapper>
  )
}

export default BusinessContainer
