import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCard } from '../CardContext/CardContext';
import { useAuth } from '../Authentication/AuthFunctions';


const Nav = () => {
    const [cartProducts] = useCard()
    const { currentUser: { name, isLogin } } = useAuth()
    const path = useLocation().pathname
    return (
        <ul id="nav-container">
            <div className="nev-item-container">
                <Link to='/' className="nav-item">Shop</Link>
                <Link to='/order' className="nav-item">Order</Link>
                <Link to='/mange' className="nav-item">Mange Inventory</Link>
            </div>
            <div className="cart-icon">
                <Link to='/login' className="nav-item">{name}</Link>
                {
                    path !== '/login' &&
                    <Link to='/login' className="nav-item">{isLogin ? 'Log out' : 'Login'}</Link>
                }
                <Link
                    to='/order'
                    className="nav-item"
                >
                    <FontAwesomeIcon icon={faCartPlus} /> {cartProducts.length}
                </Link>
            </div>
        </ul>
    );
};

export default Nav;