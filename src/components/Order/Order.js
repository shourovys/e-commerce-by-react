import React from 'react';
import { useCard } from '../CardContext/CardContext';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Order.css';


const Order = () => {
    const [cartProducts, setCartProducts] = useCard()

    const updateQuantity = (productKey, newQuantity) => {
        const upDateCartProducts = cartProducts.map(cartProduct => {
            if (cartProduct.key === productKey) {
                cartProduct.quantity = newQuantity;
            }
            return cartProduct
        });
        setCartProducts(upDateCartProducts)
    }

    const removeProduct = productKey => {
        const otherProducts = cartProducts.filter(cartProduct => cartProduct.key !== productKey)
        setCartProducts(otherProducts)
    }


    return (
        <div className='order'>
            <div className="product-container">
                {cartProducts.length !== 0 ?
                    cartProducts.map(cartProduct =>
                        <OrderProduct
                            key={cartProduct.key}
                            cartProduct={cartProduct}
                            updateQuantity={updateQuantity}
                            removeProduct={removeProduct}
                        />)
                    :
                    <h3 className='center'>Your Cart is empty...Keep shopping</h3>
                }

            </div>
            <div className="cart-container">
                <Cart cartProducts={cartProducts} btnText='proceedCheckout' />
            </div>
        </div>

    );
};

export default Order;