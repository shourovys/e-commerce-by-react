import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import ProductInfo2 from '../ProductInfo2/ProductInfo2';
import './ProductInfo.css'

const ProductInfo = () => {
    const { key } = useParams()
    const [products, setProducts] = useState(fakeData)
    const thisProduct = products.find(product => product.key === key)
    const { name, img, price, seller, stock, features, category } = thisProduct


    return (
        <div className='productInfo'>
            <div className="this-product-info">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h2 className='name'>{name}</h2>
                    <div className="tow-side-con">
                        <div className="lift-side">
                            <p>by: {seller}</p>
                            <p className='price'>price: ${price}</p>
                            <p>Only {stock} left in stock. Order now</p>

                        </div>
                        {
                            features.length ?
                                <div className="right-side">
                                    <p>Features:</p>
                                    <ul>
                                        {
                                            features.map(feature =>
                                                <li>{feature.description}: {feature.value}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                :
                                ''
                        }

                    </div>
                    <AddToCartBtn productKey={key} />
                </div>
            </div>
            <ProductInfo2 thisProductKey={key} category={category} products={products} />
        </div>

    );
};

export default ProductInfo;