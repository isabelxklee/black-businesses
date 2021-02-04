import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BusinessTile from './BusinessTile.jsx'
import PrimaryTag from './styled-components/PrimaryTag.jsx'
import Wrapper from './styled-components/Wrapper.jsx'
import BusinessTileContainer from './styled-components/BusinessTileContainer.jsx'
import H2 from './styled-components/H2.jsx'
import P from './styled-components/P.jsx'

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
      selectedCategory: event.target.innerText,
    })
  }

  render() {
    return (
      <>
        <Wrapper>
          <H2>Browse all businesses</H2>
          <P>Filter by category: </P>
          <nav>
            {this.getAllCategories().map((category) => (
              <PrimaryTag
                key={category}
                $isSelected={this.state.selectedCategory === category}
                onClick={this.handleClick}
              >
                {category}
              </PrimaryTag>
            ))}
          </nav>
        </Wrapper>
        <BusinessTileContainer>
          {this.filterBusinesses().map((business) => (
            <BusinessTile key={business.id} business={business} />
          ))}
        </BusinessTileContainer>
      </>
    )
  }
}

Showcase.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Showcase
