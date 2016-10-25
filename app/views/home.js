import React, {Component} from 'react'
import { Link } from 'react-router'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [{
        id: 1,
        name: 'Product 1'
      }, {
        id: 2,
        name: 'Product 2'
      }, {
        id: 3,
        name: 'Product 3'
      }
    ]
  }
}

render() {
  return (
    <div>
      <h1>Products</h1>
      {this.state.products.map((product, key) =>
        <div key={key}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
      )}
    </div>
  )
}
}

export default Home
