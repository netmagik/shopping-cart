import React, {Fragment} from 'react';
import {Button} from 'react-bootstrap';
import EditQuantity from '../components/Product/forms/EditProductForm';

const cart = (props) => {


    return (
            <Fragment>
            <h1 className="mt-5">Shopping Cart</h1>
            <div>Number of items:
                <strong>{props.totalQuantity}</strong>
            </div>
            <div>Total: <strong>${props.totalPrice}</strong></div>
            <div>
                <Button 
                    className="m-3" 
                    variant="outline-dark" 
                    onClick={props.clearAll}
                    disabled={!props.products || props.products.length === 0}>
                    Clear Shopping Cart
                </Button></div>
            <div className="mt-6 mb-4">{props.products.map((prod) => (
                <div key={prod.id} className="mt-4 mb-2 bg-light border pb-4">
                    <h4 className="mt-3">{prod.name}</h4>
                    <div className="pb-2"><strong>{prod.quantity} x ${prod.price}</strong></div>

                    <EditQuantity
                        setEditing={props.setEditing}
                        currentProduct={props.currentProduct}
                        updateQuantity={props.updateQuantity}
                    />

                        <Button className="mr-2" 
                            variant="outline-dark" 
                            onClick={() => {props.editProduct(prod.id)}}>
                                Change Quantity
                            </Button>
                         <Button variant="outline-dark"
                            onClick={() => props.deleteProduct(prod.id)}>
                             Remove
                         </Button>
                     
                </div>
                ))
                }
            </div>
            
           
            </Fragment>
            
    //         </div>
    //     </div>
    )
}

export default cart;