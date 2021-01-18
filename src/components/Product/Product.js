import React from 'react';

const product = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <div>
                {props.quantity}
            </div>
           
        </div>
    )
}

export default product;