import React, {Component} from 'react'
import {IBusinesses} from '../types'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './styled-components/PrimaryTag.jsx'
import CategoryContainer from './styled-components/CategoryContainer.jsx'

class Showcase extends Component {
  state = {
    selectedCategory: 'all',
  }

  getAllCategories = () => {
    const categoryArray = ['all']

    this.props.places.forEach((business) => {
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
      return this.props.places
    } else {
      return this.props.places.filter((business) =>
        business.categories.includes(this.state.selectedCategory)
      )
    }
  }

  handleClick = (event) => {
    this.setState({
      selectedCategory: event.target.id,
    })
  }

  render() {
    return (
      <div className="showcase">
        <CategoryContainer>
          <h1>Browse all businesses</h1>
          <p>Filter by category: </p>
          {this.getAllCategories().map((category) => (
            <PrimaryTag
              key={category}
              id={category}
              $isSelected={this.state.selectedCategory === category}
              onClick={this.handleClick}
            >
              {category}
            </PrimaryTag>
          ))}
        </CategoryContainer>
        <div className="business-tile-container">
          {this.filterBusinesses().map((business) => (
            <BusinessTile key={business.id} business={business} />
          ))}
        </div>
      </div>
    )
  }
}

Showcase.propTypes = {
  places: IBusinesses.isRequired,
}

export default Showcase
