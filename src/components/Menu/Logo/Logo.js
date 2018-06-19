import React from 'react';
import LogoImg from '../../../logo.png';

const Logo = () => (
    <div className="Logo">
        <h1>
            <a href="/"><img src={LogoImg} alt="Company logo" height="100px"/></a>
        </h1>
    </div>
);

export default Logo;