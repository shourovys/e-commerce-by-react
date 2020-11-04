import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const Product = (props) => {
    const { name, img, key, price, seller, stock, features } = props.product

    return (

        <div className='product'>
            <Link to={`/product/${key}`} className='link'>
                <div className="img">
                    <img src={img} alt="" />
                </div>
            </Link>
            <div className="info">
                <Link to={`/product/${key}`} className='link'>
                    <h2 className='name'>{name}</h2>
                </Link>
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

    );
};

export default Product;