import React from 'react';
import './NavBar.css'
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import { useLocation } from 'react-router-dom';


const NavBar = () => {
    const path = useLocation().pathname

    return (
        <div>
            {
                path !== '/login' && <Logo />
            }
            <Nav />

        </div>
    );
};

export default NavBar;