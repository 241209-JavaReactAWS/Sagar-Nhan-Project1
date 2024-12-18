import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Buttons from './Buttons';

const Navbar: React.FC = () => (
    <header className="header fixed-top bg-dark py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
            <Logo />
            <SearchBar />
            <Buttons />
        </div>
    </header>
);

export default Navbar;
