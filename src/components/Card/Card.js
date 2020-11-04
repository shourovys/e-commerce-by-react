import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const { img, price, name, seller, key } = props.categoryProduct
    const scrollTop = () => window.scrollTo(0, 0)
    return (
        <Link className='link' to={'/product/' + key}>
            <div className='card link' onClick={scrollTop}>
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-info">
                    <h4 className='name'>{name}</h4>
                    <p>by: {seller}</p>
                    <p className='price'>price: ${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;