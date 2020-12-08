import React, {useState, useEffect} from 'react'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './PrimaryTag.jsx'
import Wrapper from './Wrapper.jsx'

const BusinessContainer = ({categories}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    fetch('https://black-businesses-json.herokuapp.com/places')
      .then((response) => response.json())
      .then((response) => setBusinesses(response))
  }, [])

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

  const renderBusinesses = () => {
    return filterBusinesses().map((business) => {
      return <BusinessTile key={business.id} business={business} />
    })
  }

  const renderAllTags = () => {
    return categories.map((category) => {
      return (
        <PrimaryTag key={category} id={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </PrimaryTag>
      )
    })
  }

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
