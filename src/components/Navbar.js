import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    JN Clean Sweep Inc
                </Link>
                <ul className="main-nav">
                    <li className="nav-item">
                        <Link to='/about-us' className="nav-links">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact-us' className="nav-links">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar