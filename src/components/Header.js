import React from 'react';
import './Header.css';
import siteLogo from '../img/pc-logo.png';

const Header = () => {
    return (
        <header>
            <img src={siteLogo} alt="Premier Coatings Logo" style={{ width: '150px' }} />
            <h1>Premier Coatings</h1>
        </header>
    );
}

export default Header;