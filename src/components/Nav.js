import React from "react";
import '../App.css';
import {Link} from 'react-router-dom'


const Nav = () => {
    const navStyle = {

        color:'white'
    }

return(
        <nav>
            
            <ul className="nav-links">
                <Link style={navStyle} to="/">Home</Link>
                <Link style={navStyle} to="/login">
                <li>Register now</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <button className="buttonnav">
                <Link style={navStyle} to="/logout">
                    <li>Log out</li>
                </Link></button>
            </ul>

        </nav>
        
    )
}
export default Nav; 