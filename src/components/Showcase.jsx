import React, {useState} from 'react'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './PrimaryTag.jsx'
import Wrapper from './Wrapper.jsx'

const Showcase = ({businesses}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getAllCategories = () => {
    const categoryArray = []
    categoryArray.push('all')

    businesses.map((business) => {
      business.categories.map((category) => {
        categoryArray.push(category)
      })
    })

    return categoryArray.filter((value, index, self) => self.indexOf(value) === index)
  }

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
    filterBusinesses().map((business) => <BusinessTile key={business.id} business={business} />)

  const renderAllTags = () =>
    getAllCategories().map((category) => (
      <PrimaryTag key={category} id={category} onClick={() => setSelectedCategory(category)}>
        {category}
      </PrimaryTag>
    ))

  return (
    <Wrapper>
      <h1>All Businesses</h1>
      <h3>Filter by category</h3>
      <section className="category-container">{renderAllTags()}</section>
      <section className="business-tile-container">{renderBusinesses()}</section>
    </Wrapper>
  )
}

export default Showcase
