import React from "react";
import {  NavLink } from 'react-router-dom';


const Nav = () => (
    <div className="photo-search-nav">
    <nav className="main-nav">
        <ul className="main-nav">
            <li><NavLink exact to="/">๐  Home</NavLink></li>
            <li><NavLink to="/Puppies">๐ถPuppies</NavLink></li>
            <li><NavLink to="/Dogs">๐ Dogs</NavLink></li>
            <li><NavLink to="/Cats">๐ Cats </NavLink></li>
        </ul>
    </nav>
   
    </div>
);




export default Nav;