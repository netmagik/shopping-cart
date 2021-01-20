import React, {useState, useEffect} from 'react';
import Cart from './containers/cart';
import {Container, Row, Col} from 'react-bootstrap';
import EditQuantity from './components/Product/forms/EditProductForm';

const App = () => {

  const initial = [
    { id: 34, name: 'EGGS', quantity: 1, price: 3.99},
    { id: 45, name: 'BUTTER', quantity: 2, price: 2.50},
    { id: 56, name: 'MILK', quantity: 1, price: 1.90},
    { id: 23, name: 'BREAD', quantity: 3, price: 4.50}
  ]

  const initialEditState = { id: null, name: '', quantity: '', price: ''};

  const [products, setProducts] = useState(initial);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(initialEditState);

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
  const totalPrice = sumTotal(products).toFixed(2);

  //Clear Shopping Cart
  const clearAll = () => {
    const updatedProducts = [...products]
    updatedProducts.length = 0;
    setProducts(updatedProducts)
  }

  // Edit Mode is Selected
  const editProduct = (product) => {
    setEditing(true);
    setCurrentProduct({product})
  }

  // Update Quantity
  const updateQuantity = (id, updatedProduct) => {
    setEditing(false)
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)))
  }

  return (
      <Container>
        <Row className="justify-content-center">
          <Col md={{ span: 8}} className="text-center">

        {editing ? (
          <EditQuantity
          setEditing={setEditing}
          
      />

        ) : (
          <Cart 
        products={products} 
        deleteProduct={deleteProductHandler}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        clearAll={clearAll}
        editProduct={editProduct}
        updateQuantity={updateQuantity}
        currentProduct={currentProduct}
      />
        )}
           
      </Col>
      </Row>
      </Container>
  );
}

export default App;
