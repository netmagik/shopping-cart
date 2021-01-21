import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';

const Summary = props => {
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
            </Button>
        </div>
        </Fragment>
    )
}

export default Summary;