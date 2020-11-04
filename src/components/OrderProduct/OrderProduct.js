import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Btn from '../Btn/Btn';
import HandelQuantity from '../HandelQuantity/HandelQuantity';
import './OrderProduct.css'

const OrderProduct = props => {
    const { name, key, price, seller, quantity } = props.cartProduct

    const [newQuantity, setNewQuantity] = useState(quantity)

    const handelQuantity = sine => {
        if (sine === 'Plus') {
            setNewQuantity(newQuantity + 1)
        } else {
            setNewQuantity(newQuantity <= 1 ? newQuantity : newQuantity - 1)
        }
    }
    useEffect(() => {
        props.updateQuantity(key, newQuantity)
    }, [newQuantity])

    return (
        <div className='orderProduct'>
            <h2 className='name'>{name}</h2>

            <div className="tow-side-con">
                <div className="lift-side">
                    <p className='price'>price: ${price}</p>
                    <p>by: {seller}</p>
                    <div onClick={() => props.removeProduct(key)}>
                        <Btn>Remove</Btn>
                    </div>

                </div>
                <div className="right-side bottom">
                    <HandelQuantity quantity={newQuantity} handelQuantity={handelQuantity} />
                </div>

            </div>
        </div>
    );
};

export default OrderProduct;