import React from 'react';
import logo from '../assets/vv-logo.svg';

const Header = () => {
    return (
        <div className="top-header">
            <div className="location-header">
                <img className="photo" src={logo} alt="Logo" />
            </div>
        </div>
    );
}

export default Header;