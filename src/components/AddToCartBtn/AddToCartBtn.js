import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { useCard } from '../CardContext/CardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const AddToCartBtn = (props) => {
    const [cartProducts, setCartProducts] = useCard()
    const [products, setProducts] = useState(fakeData)


    const addToCartHandler = (key) => {
        let thisKeyProduct
        const isKeyPresent = cartProducts.find(cartProduct =>
            cartProduct.key === key)
        if (!isKeyPresent) {
            // console.log('this product is not present');
            thisKeyProduct = products.find(product => product.key === key);
            thisKeyProduct.quantity = 1
            setCartProducts([...cartProducts, thisKeyProduct])
        }
        else {
            // console.log('this product is present');
            let otherCartProduct = cartProducts.filter(cartProduct => cartProduct.key !== key)
            thisKeyProduct = products.find(product => product.key === key)
            thisKeyProduct.quantity += 1
            setCartProducts([...otherCartProduct, thisKeyProduct])
        }
    }
    return (
        <button className='btn' onClick={() => addToCartHandler(props.productKey)}>
            <FontAwesomeIcon icon={faCartPlus} />
                        &nbsp;  Add to carts
        </button>
    );
};

export default AddToCartBtn;