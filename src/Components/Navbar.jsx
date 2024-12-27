import React from 'react';
import {assets} from "../assets/assets"
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <img src={assets.logo} alt="" />
            <ul>
                <NavLink>
                    <li>Home</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>All Doctors</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>ABOUT</li>
                    <hr />
                </NavLink>
                <NavLink>
                    <li>Contact</li>
                    <hr />
                </NavLink>
            </ul>
            <div>
                <button>Create account</button>
            </div>
        </div>
    );
};

export default Navbar;