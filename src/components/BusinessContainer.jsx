import React, {Component} from 'react'
import Form from './Form.jsx'
import BusinessTile from './BusinessTile.jsx'

class BusinessContainer extends Component {
  render() {
    const businessesArray = () => {
      return this.props.businesses.map((business) => {
        return <BusinessTile key={business.id} business={business} />
      })
    }

    return (
      <>
        <Form />
        <section className="business-tile-container">{businessesArray()}</section>
      </>
    )
  }
}

export default BusinessContainer
