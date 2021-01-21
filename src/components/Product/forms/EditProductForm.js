import React, {useEffect, useState} from 'react';
import {FormControl, Form, FormGroup, FormLabel, Button} from 'react-bootstrap';

const EditQuantity = (props) => {

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(props.product.quantity)
    },[props]);

    const handleInputChange = (event) => {
        const newQuantity = (Number(event.target.value))
        setQuantity(newQuantity)

    }

    const addOne = () => {
        const updatedQuantity = quantity + 1;
        setQuantity(updatedQuantity)
    }

    const removeOne = () => {
        const updatedQuantity = quantity - 1;
        setQuantity(updatedQuantity);
    }

    const save = () => {
        props.onSaveQuantity({...props.product, quantity})
    }

    let totalProductPrice = (quantity * props.product.price).toFixed(2);


    return (
        <>
        <div>
        Price: <strong>${totalProductPrice}</strong>
        </div>
        <Form inline className="mb-3 ml-4"
            onSubmit={(event) => {
                event.preventDefault();
            }}> 

            <FormGroup>
            <FormLabel style={{display: 'inline'}}>Quantity: </FormLabel>
            <FormControl
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleInputChange}
                />
            </FormGroup>
      
            <FormGroup>
            <Button 
                variant="outline-dark" 
                className="ml-2"
                onClick={addOne}>
                    Add one
            </Button>
            <Button 
                variant="outline-dark"
                disabled={quantity === 0}
                onClick={removeOne}>
                    Remove one
            </Button>
            <Button 
                variant="outline-dark" 
                className="ml-2"
                onClick={save}
                disabled={quantity === props.quantity}>
                    Save
            </Button>
            <Button 
                variant="outline-dark"
                onClick={props.toggleEditing}>
                    Cancel
            </Button>
            </FormGroup>
        </Form>
        </>
    )
}

export default EditQuantity;