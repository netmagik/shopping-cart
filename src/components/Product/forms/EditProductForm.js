import React, {useState} from 'react';
import product from '../Product';

const EditQuantity = (props) => {

    const [quantity, setQuantity] = useState(props.currentProduct)

    const handleInputChange = () => {
        console.log('handle Change')
    }

    
    return (
        <form>
            <label>Quantity: </label>
            <input 
                type="text"
                name="quantity"
                value={product.quantity}
                placeholder={product.quantity}
                onChange={handleInputChange}
                />
            <button>Add one</button>
            <button>Remove one</button>
            <button>Save</button>
            <button>Cancel</button>

        </form>
        
    )
}

export default EditQuantity;