import React, {useEffect, useState} from 'react';
import Product from '../components/Product/Product';


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

    return (

            <div className="mt-6 mb-4">
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
    )
}

export default Cart;