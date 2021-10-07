import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => (
    <nav className="main-nav">
        <ul className="main-nav">
            <li><Link to="">Puppies</Link></li>
            <li><Link to="">Dogs</Link></li>
            <li><Link to="">Senior Dogs</Link></li>
        </ul>
    </nav>
    //  {/* Write routes here... */}
);



export default Nav;