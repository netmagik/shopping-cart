import React, {useState} from 'react';
import Cart from './containers/Cart';
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

  
  return (
      <Container className="my-6">
        <Row className="justify-content-center">
          <Col md={{ span: 8}} className="text-center">
          
          
          <Cart 
            products={products} 
            deleteProduct={deleteProductHandler}
          />
           
      </Col>
      </Row>
      </Container>
  );
}

export default App;
