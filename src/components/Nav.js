import React from "react";
import {  NavLink } from 'react-router-dom';


const Nav = () => (
    <div className="photo-search-nav">
    <nav className="main-nav">
        <ul className="main-nav">
            <li><NavLink exact to="/">🏠 Home</NavLink></li>
            <li><NavLink to="/Puppies">🐶Puppies</NavLink></li>
            <li><NavLink to="/Dogs">🐕 Dogs</NavLink></li>
            <li><NavLink to="/Cats">🙀 Cats </NavLink></li>
        </ul>
    </nav>
   
    </div>
);




export default Nav;