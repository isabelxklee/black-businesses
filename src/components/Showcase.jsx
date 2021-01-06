import React, {useState} from 'react'
import {IBusinesses} from '../types'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './styled-components/PrimaryTag.jsx'
import Wrapper from './styled-components/Wrapper.jsx'

const Showcase = ({businesses}) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getAllCategories = () => {
    const categoryArray = ['all']

    businesses.forEach((business) => {
      business.categories.forEach((category) => {
        if (!categoryArray.includes(category)) {
          categoryArray.push(category)
        }
      })
    })

    return categoryArray
  }

  const filterBusinesses = () => {
    if (selectedCategory === 'all') {
      return businesses
    } else {
      return businesses.filter((business) => business.categories.includes(selectedCategory))
    }
  }

  return (
    <Wrapper>
      <h1>All Businesses</h1>
      <h3>Filter by category</h3>
      <section className="category-container">
        {getAllCategories().map((category) => (
          <PrimaryTag
            key={category}
            id={category}
            $isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </PrimaryTag>
        ))}
      </section>
      <section className="business-tile-container">
        {filterBusinesses().map((business) => (
          <BusinessTile key={business.id} business={business} />
        ))}
      </section>
    </Wrapper>
  )
}

Showcase.propTypes = {
  businesses: IBusinesses.isRequired,
}

export default Showcase
