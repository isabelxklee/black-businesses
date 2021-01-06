import React, {Component} from 'react'
import BusinessTile from './BusinessTile.jsx'
import CategoryTag from './CategoryTag.jsx'
import Wrapper from './Wrapper.jsx'

class Showcase extends Component {
  state = {
    selectedCategory: 'all',
  }

  getAllCategories = () => {
    const categoryArray = ['all']

    this.props.businesses.forEach((business) => {
      business.categories.forEach((category) => {
        if (!categoryArray.includes(category)) {
          categoryArray.push(category)
        }
      })
    })

    return categoryArray
  }

  filterBusinesses = () => {
    if (this.state.selectedCategory === 'all') {
      return this.props.businesses
    } else {
      return this.props.businesses.filter((business) => business.categories.includes(this.state.selectedCategory))
    }
  }

  handleClick = (event) => {
    this.setState({
      selectedCategory: event.target.id
    })
  }

  render() {
    return (
      <Wrapper>
        <h1>All Businesses</h1>
        <h3>Filter by category</h3>
        <section className="category-container">{this.getAllCategories().map((category) => (
          <CategoryTag
            key={category}
            id={category}
            $isSelected={this.state.selectedCategory === category}
            onClick={this.handleClick}
          >
            {category}
          </CategoryTag>
        ))}</section>
        <section className="business-tile-container">{
          this.filterBusinesses().map((business) => (
            <BusinessTile key={business.id} business={business} />
          ))
        }
        </section>
      </Wrapper>
    )
  }
}

export default Showcase
