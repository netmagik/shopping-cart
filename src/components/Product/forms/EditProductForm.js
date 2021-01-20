import React, {useState} from 'react';
import product from '../Product';
import {FormControl, Form, FormGroup, Col, FormLabel, Button} from 'react-bootstrap';

const EditQuantity = (props) => {

    const [quantity, setQuantity] = useState(props.currentProduct)

    const handleInputChange = () => {
        console.log('handle Change')
    }


    return (
        <Form inline className="mb-3 ml-4"> 
            <FormGroup>
            <FormLabel style={{display: 'inline'}}>Quantity: </FormLabel>
            <FormControl
                type="text"
                name="quantity"
                value={product.quantity}
                placeholder={product.quantity}
                onChange={handleInputChange}
                />
            </FormGroup>
      
            <FormGroup>
            <Button variant="outline-dark" className="ml-2">Add one</Button>
            <Button variant="outline-dark">Remove one</Button>
            <Button variant="outline-dark" className="ml-2">Save</Button>
            <Button variant="outline-dark">Cancel</Button>
            </FormGroup>
        </Form>
        
    )
}

export default EditQuantity;