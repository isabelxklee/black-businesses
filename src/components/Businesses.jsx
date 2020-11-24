import React, {Component} from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'

class Businesses extends Component {
  render() {
    const businessesArray = () => {
      return this.props.businesses.map((business) => {
        return <Card key={business.id} business={business} />
      })
    }

    return (
      <section>
        <Form />
        {businessesArray()}
      </section>
    )
  }
}

export default Businesses