import React from "react";
import './Footer.css';

const Footer = (props) => {
    return (
        <>
            <div className="spacer"></div>
            <div className="container-fluid footer" style={{ color: props.mode === 'dark' ? "white" : "black", textAlign: "center" }}>
                <div className="title">
                    <h4 className="title-foot">Jason Cole</h4>
                    <p> &copy; 2024</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
