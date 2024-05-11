import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/logo.jpeg";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Header">
            <div className="left">
                <img src={logo} alt="logo" />
            </div>
            <div className={`right ${isOpen ? 'show' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </div>
        </div>
    );
}
