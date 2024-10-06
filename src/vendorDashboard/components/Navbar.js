import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='LandingSection'>
            <h5>Vendor Dashboard</h5>
            <div>
                <NavLink to="/login">Login/</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
