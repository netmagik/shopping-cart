import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import EditForm from './forms/EditProductForm';

const Product = (props) => {

    const [editing, setEditing] = useState(false);
    // const initialEditState = { id: null, name: '', quantity: '', price: ''};
    // const [currentProduct, setCurrentProduct] = useState(initialEditState);


    // Edit Mode is Selected
    const editProduct = (product) => {
    setEditing(true);
    // setCurrentProduct({product})
    }

    const toggleEditing = () => {
        setEditing(!editing)
    }

    const onChange = (product) => {
        toggleEditing();
        props.onChange(product);
    }

    let totalProductPrice = (props.product.quantity * props.product.price).toFixed(2);

    return (
        <div className="mt-4 mb-2 bg-light border pb-4">
            <h4 className="mt-3">{props.product.name}</h4>
            
            {editing ? (
                <EditForm 
                    product={props.product}
                    // quantity={props.prod.quantity}
                    // price={props.prod.price}
                    onSaveQuantity={onChange}
                    toggleEditing={toggleEditing}
                    />
                ) : (
                <>
                <div className="pb-2">
                    <strong>
                    {props.product.quantity} x ${props.product.price} = {totalProductPrice} 
                    </strong>
                </div>
                <Button className="mr-2" 
                        variant="outline-dark" 
                        onClick={() => {editProduct(props.product)}}
                >
                    Change Quantity
                </Button>
                <Button variant="outline-dark"
                        onClick={() => props.deleteProduct(props.product.id)}>
                        Remove
                </Button>
                </>
               
                )}
        </div>
                    
    )
}

export default Product;