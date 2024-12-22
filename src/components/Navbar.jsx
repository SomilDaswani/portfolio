import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'; // Removed faEnvelope
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav className="container" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
                <h4 className="title-head">Jason Cole.</h4>
                <ul>
                    <li>
                        <Link style={{ color: props.mode === 'dark' ? "white" : "black" }} to="mailto:jasoncoleishere@gmail.com" className="link" >Contact</Link>
                    </li>
                    {/* Removed the CONTACT link */}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
