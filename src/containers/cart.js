import React, {useEffect, useState} from 'react';
import Product from '../components/Product/Product';
import Summary from '../components/Product/Summary';



const Cart = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.products)
    }, [props])

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map((prod) => {
            if (prod.id === updatedProduct.id) {
                return updatedProduct;
            }
            return prod;
        })
        .filter((prod) => prod.quantity > 0 )
        setProducts(updatedProducts);
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
        setProducts([])
  }

    return (
        <>
            <Summary 
                totalQuantity={totalQuantity} 
                totalPrice={totalPrice}   
                clearAll={clearAll} 
                products={products}   />

            <div className="my-3">
                {products.map((prod) => (
                <Product 
                    product={prod}
                    key={prod.id} 
                    deleteProduct={props.deleteProduct}
                    onChange={updateProduct}
                    />
                ))
                }
            </div>
        </>
    )
}

export default Cart;