import React from 'react';
import './HandelQuantity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const HandelQuantity = props => {
    const { handelQuantity, quantity } = props;
    return (
        <div className='HandelQuantity'>
            <FontAwesomeIcon icon={faPlus} onClick={() => handelQuantity('Plus')} className='plus' />
            <span className='quantity'>{quantity}</span>
            <FontAwesomeIcon icon={faMinus} onClick={() => handelQuantity('Minus')} className='minus' />
        </div>
    );
};

export default HandelQuantity;