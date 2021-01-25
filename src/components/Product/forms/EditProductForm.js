import React, {useEffect, useState} from 'react';
import {FormControl, Form, Row, FormGroup, FormLabel, Button} from 'react-bootstrap';

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
            <Row>
            <FormGroup className="ml-4">
            <FormLabel className="mr-2">Quantity: </FormLabel>
            <FormControl
                size="sm"
                type="text"
                name="quantity"
                value={quantity}
                onChange={handleInputChange}
                />
            </FormGroup>

            <FormGroup>
            <div className="btn-group ml-2" role="group">
            <Button 
                variant="outline-dark" 
                onClick={addOne}>
                    Add one
            </Button>
            <Button 
                variant="outline-dark"
                disabled={quantity === 0}
                onClick={removeOne}>
                    Remove one
            </Button>
            </div>

            <div className="btn-group ml-2" role="group">
            <Button 
                variant="outline-dark" 
                onClick={save}
                disabled={quantity === props.quantity}>
                    Save
            </Button>
            <Button 
                variant="outline-dark"
                onClick={props.toggleEditing}>
                    Cancel
            </Button>
            </div>
            </FormGroup>
        
            </Row>
        </Form>
        </>
    )
}

export default EditQuantity;