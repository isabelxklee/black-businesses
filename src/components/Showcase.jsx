import React, {Component} from 'react'
import BusinessTile from './BusinessTile.jsx'
import CategoryTag from './CategoryTag.jsx'
import Wrapper from './Wrapper.jsx'

class Showcase extends Component {
  state = {
    category: 'all',
  }

  getAllCategories = () => {
    const array = []
    array.push('all')

    this.props.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        array.push(category)
      })
    })

    return [...new Set(array)]
  }

  handleClick = (event) => {
    this.setState({
      category: event.target.id,
    })
  }

  filterBusinesses = () => {
    const allBusinesses = this.props.businesses
    const selectedCategory = this.state.category
    let filteredArray = []

    if (selectedCategory === 'all') {
      filteredArray = allBusinesses
    } else {
      allBusinesses.map((business) => {
        business.categories.map((category) => {
          category === selectedCategory ? filteredArray.push(business) : null
        })
      })
    }

    return filteredArray
  }

  render() {
    const businessesArray = () => {
      return this.filterBusinesses().map((business) => {
        return (
          <BusinessTile key={business.id} business={business} selectCategory={this.handleClick} />
        )
      })
    }

    const allCategoryTags = () => {
      return this.getAllCategories().map((category) => {
        return (
          <CategoryTag key={category} id={category} onClick={this.handleClick}>
            {category}
          </CategoryTag>
        )
      })
    }

    return (
      <Wrapper>
        <h1>All Businesses</h1>
        <h3>Filter by category</h3>
        <section className="category-container">{allCategoryTags()}</section>
        <section className="business-tile-container">{businessesArray()}</section>
      </Wrapper>
    )
  }
}

export default Showcase
