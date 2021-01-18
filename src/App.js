import React, {useState} from 'react';
import Cart from './containers/cart';
import {Container, Row, Col} from 'react-bootstrap';

const App = () => {

  const initial = [
    { id: 34, name: 'EGGS', quantity: 1, price: 3.99},
    { id: 45, name: 'BUTTER', quantity: 2, price: 2.50},
    { id: 56, name: 'MILK', quantity: 1, price: 1.90},
    { id: 23, name: 'BREAD', quantity: 3, price: 4.50}
  ]

  const [products, setProducts] = useState(initial);

  // Delete Product
  const deleteProductHandler = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  }

  // Calculate Total Number of items
  const totalQuantity = products.reduce((total, b) => {
    return (total + b.quantity)
  }, 0);

  // Calculate Total Price
  const sumTotal = products =>
  products.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  const totalPrice = sumTotal(products)


  return (
      <Container>
        <Row className="justify-content-center">
          <Col md={{ span: 6}} className="text-center">
      <Cart 
        products={products} 
        deleteProduct={deleteProductHandler}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
      />
      </Col>
      </Row>
      </Container>
  );
}

export default App;
