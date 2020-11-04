import React from 'react';
import './Logo.css'
import logo from '../../images/logo.png'


const Logo = () => {
    return (
        <div id='logo-container'>
            <img id='logo' src={logo} alt="" />
        </div>
    );
};

export default Logo;