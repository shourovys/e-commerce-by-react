import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../Btn/Btn';
import './Cart.css'

const Cart = (props) => {
    const makeNumRound = num => Math.round(num)
    const cartProducts = props.cartProducts

    const totalPrice = cartProducts.reduce((totalPrice, current) => totalPrice + current.price * current.quantity, 0)
    let shippingCost = cartProducts.reduce((total, current) => total + current.shipping * current.quantity, 0)
    const vat = (totalPrice / 100) * 10



    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>
                <span>Item Order </span>
                <span>{cartProducts.length}</span>
            </p>
            <p>
                <span>product price </span>
                <span>${makeNumRound(totalPrice)}</span>
            </p>
            <p>
                <span>Shipping cost </span>
                <span>${makeNumRound(shippingCost)}</span></p>
            <p>
                <span>Vet </span>
                <span>${makeNumRound(vat)}</span>
            </p>
            <hr />
            <p>
                <span>Total Price </span>
                <span>${makeNumRound(totalPrice + shippingCost + vat)}</span>
            </p>

            <Link
                to={props.btnText === 'proceedCheckout' ? '/proceedCheckout' : '/order'} className='center link'
            >
                <Btn>{props.btnText}</Btn>
            </Link>
        </div>
    );
};

export default Cart;