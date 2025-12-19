import React from 'react';
import logoImg from '../assets/ctrl_logo_white.png';

const Logo = ({ height = 50, showTagline = true }) => {
    return (
        <img
            src={logoImg}
            alt="CTRL+ Logo"
            style={{
                height: `${height}px`,
                width: 'auto',
                display: 'block'
            }}
        />
    );
};

export default Logo;
