import React, {Component} from 'react'
// import Form from './Form.jsx'
import BusinessTile from './BusinessTile.jsx'
import CategoryTag from './CategoryTag.jsx'

class BusinessContainer extends Component {
  getAllCategories = () => {
    const array = []

    this.props.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        array.push(category)
      })
    })

    return [...new Set(array)]
  }

  render() {
    const businessesArray = () => {
      return this.props.businesses.map((business) => {
        return <BusinessTile key={business.id} business={business} />
      })
    }

    const allCategoryTags = () => {
      return this.getAllCategories().map((category) => {
        return <CategoryTag key={category}>{category}</CategoryTag>
      })
    }

    return (
      <section className="all-businesses">
        {/* <Form /> */}
        <h2>All Businesses</h2>
        <h3>Filter by category</h3>
        <section className="category-container">{allCategoryTags()}</section>
        <section className="business-tile-container">{businessesArray()}</section>
      </section>
    )
  }
}

export default BusinessContainer