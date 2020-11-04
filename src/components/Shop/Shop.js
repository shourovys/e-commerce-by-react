import React, { useEffect, useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { useCard } from '../CardContext/CardContext';
import SkeletonProduct from '../Skeleton/SkeletonProduct/SkeletonProduct';


const Shop = () => {
    const [products, setProducts] = useState(null)
    const [cartProducts] = useCard()
    useEffect(() => {
        setTimeout(() => {
            setProducts(fakeData.slice(1, 10))
        }, 2000);
    }, [])

    return (
        <div className='shop'>
            <div className="product-container">
                {products &&
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.key}
                        />)

                }
                {
                    !products &&
                    [1, 2, 3, 4, 5, 6, 7, 8].map(n => <SkeletonProduct key={n} />)
                }

            </div>
            <div className="cart-container">
                <Cart cartProducts={cartProducts} btnText='Review Your Order' />
            </div>

        </div>
    );
};

export default Shop;