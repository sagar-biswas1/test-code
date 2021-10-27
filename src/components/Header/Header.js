import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <>
        {/* navbar  start*/}
         <Navbar></Navbar>

         {/* header start*/}
            <div className="header mt-5 text-center">
                <h2 className="fw-bold text-capitalize fs-1 mb-3">Make an association in islamic singer team</h2>
                <h3>Total Budget : 150 Million</h3>
            </div>
        </>
    );
};

export default Header;