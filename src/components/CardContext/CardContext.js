import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const cardContext = createContext()

export const useCard = () => useContext(cardContext)


const CardContext = props => {
    const [cartProducts, setCartProducts] = useState([])
    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem('cartProducts') || "[]"));

    }, [])


    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }, [cartProducts])


    // console.log(cartProducts);
    return (
        <cardContext.Provider value={[cartProducts, setCartProducts]}>
            {props.children}
        </cardContext.Provider>
    );
};

export default CardContext;