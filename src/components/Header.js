import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import siteLogo from '../img/pc-logo.png';

const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <Link to="/" className='header-logo'>
                    <img src={siteLogo} alt="Premier Coatings Logo" className='logo' />
                </Link>
                <h1 className='header-title'>Premier Coatings</h1>
                <span className='header-right-buffer'></span>
            </div>
        </header>
    );
}

export default Header;