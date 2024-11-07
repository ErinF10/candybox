import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Candy Box</h2>
            <div className="link-container">
                <Link to='/'>Home</Link>
                <Link to='/create'>Add Candy</Link>
                <Link to='/gallery'>Candybox</Link>
            </div>
        </div>
    )
}

export default Navbar