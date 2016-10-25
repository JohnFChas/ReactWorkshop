import React, { Component } from 'react'

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    // TODO: Call server for product with routeparams.id
    // then set state with callback
    this.setState({
      product: {
        id: this.props.params.id,
        name: 'Product ' + this.props.params.id
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Product ID: {this.state.product.id}</h1>
        <h2>Product name: {this.state.product.name}</h2>
      </div>
    )
  }
}

export default Product
