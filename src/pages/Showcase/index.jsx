import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BusinessTile from '../../components/BusinessTile'
import {Container, Nav, Tag} from './styles'
import {Wrapper} from '../styles'
import {H2, P, Ul} from '../../styles'

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
          <Nav>
            <Ul>
              {this.getAllCategories().map((category) => (
                <li key={category}>
                  <Tag
                    $isSelected={this.state.selectedCategory === category}
                    onClick={this.handleClick}
                  >
                    {category}
                  </Tag>
                </li>
              ))}
            </Ul>
          </Nav>
        </Wrapper>
        <Container>
          {this.filterBusinesses().map((business) => (
            <BusinessTile key={business.id} business={business} />
          ))}
        </Container>
      </>
    )
  }
}

Showcase.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Showcase
