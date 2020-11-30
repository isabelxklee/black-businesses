import React, {Component} from 'react'
// import Form from './Form.jsx'
import BusinessTile from './BusinessTile.jsx'
import CategoryTag from './CategoryTag.jsx'

class BusinessContainer extends Component {
  state = {
    category: "all"
  }

  getAllCategories = () => {
    const array = []
    array.push("all")

    this.props.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        array.push(category)
      })
    })

    return [...new Set(array)]
  }

  handleClick = (event) => {
    this.setState({
      category: event.target.id
    })
  }

  filterBusinesses = () => {
    const allBusinesses = this.props.businesses
    const selectedCategory = this.state.category
    let filteredArray = []

    if (selectedCategory === "all") {
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
        return <BusinessTile key={business.id} business={business} selectCategory={this.handleClick} />
      })
    }

    const allCategoryTags = () => {
      return this.getAllCategories().map((category) => {
        return <CategoryTag key={category} id={category} onClick={this.handleClick}>{category}</CategoryTag>
      })
    }

    return (
      <section className="all-businesses">
        {/* <Form /> */}
        <h2>All Businesses</h2>
        <h3>Filter by category</h3>
        <section className="category-container">{allCategoryTags()}</section>
        <section className="business-tile-container">{businessesArray()}</section>
        <h3>Sources</h3>
        <ul>
          <li><a href="https://www.blackownedbrooklyn.com" target="noreferrer_blank">Black-Owned Brooklyn</a></li>
          <li><a href="https://trippin.world/guides" target="noreferrer_blank">Trippin World Guides</a></li>
        </ul>
      </section>
    )
  }
}

export default BusinessContainer