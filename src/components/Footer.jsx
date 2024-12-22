import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return(
        <>
            <div className="spacer"></div>
            <div className="container-fluid footer" style={{color : props.mode === 'dark' ? "white" : "black"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="title">
                            
                                <h4 className="title-foot">Sannu.</h4>
                                <p>Copyright &copy; 2023 | Made by Sannu</p>
                            
                        </div>
                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-2">
                        <div className="footer-icon-nav">
                            {/* <div className="col-md-4"> */}
                            <span className="footer-item">
                            <FontAwesomeIcon icon={faReddit} size="2x" style={{color: "#11111",}}/>
                            </span>
                            {/* </div> */}
                            {/* <div className="col-md-4"> */}
                            <span className="footer-item">
                            <a style={{color : props.mode === 'dark' ? "white" : "black"}} href="https://www.facebook.com/sannanumerofficial" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" style={{color: "#11111",}}/></a>
                            </span>
                            {/* </div> */}
                            {/* <div className="col-md-4"> */}
                            <span className="footer-item">
                            <a style={{color : props.mode === 'dark' ? "white" : "black"}} href="https://www.instagram.com/sannan_umer" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#11111",}}/></a>
                            </span>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 

export default Footer;