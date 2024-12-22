import React from "react";
import './Hero.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedinIn, faTwitter, faReact, faNodeJs, faWordpress, faBootstrap, faJava } from '@fortawesome/free-brands-svg-icons';

const Hero = (props) =>{
    return(
        <>
            <div className="spacer"></div>
            <center>
                <div className="hero-section" style={{color : props.mode === 'dark' ? "white" : "black"}}>
                    <center>
                        <h1 className="hero-title">Muhammad Sannan Umer</h1>
                    </center>
                    <h2 className="job-title">Front End Web Developer</h2>
                    <p className="job-description">I create front-end web applications and business websites to help you grow your business and your online presence.</p>
                    <div className="icon-list">
                        {/* <div className="col-sm-4"> */}
                        <span className="icon-item">
                        <a style={{color : props.mode === 'dark' ? "white" : "black"}} href="https://www.github.com/sannanumer2003" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#11111",}}/></a>
                        </span>
                        
                        {/* </div> */}
                        {/* <div className="col-sm-4"> */}
                        <span className="icon-item">
                        <a style={{color : props.mode === 'dark' ? "white" : "black"}} href="https://www.linkedin.com/in/sannanumer" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color: "#11111",}}/></a>
                        </span>
                        
                        {/* </div> */}
                        {/* <div className="col-sm-4"> */}
                        <span className="icon-item">
                        <a style={{color : props.mode === 'dark' ? "white" : "black"}} href="https://www.twitter.com/sannan_umer" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "#11111",}}/></a>
                        </span>
                        {/* <a href="#">hh</a>
                        <a href="#">hh</a> */}
                        {/* </div> */}
                    </div>
                    <br></br>
                    <p>---------------------------------------------</p>
                    <div className="spacer">
                        
                    </div>
                    <button className={`theme-button btn btn-outline-${props.textMode}`} onClick={props.handleMode}>{props.displayTextMode} Mode</button>

                    <div className="spacer">
                        

                    </div>

                    <div className="small-spacer">
                        

                    </div>

                    <div className="row services">
                        <div className="col-md-6">
                            <div className="service-logo">
                            <FontAwesomeIcon icon={faReact} size="5x" style={{color: "#11111",}}/>
                            <h4 className="service-head">React.JS</h4>
                            </div>
                            <div className="service-description">
                                <p>I use React.JS for building interactive user interfaces and web applications quickly and efficiently with significantly lesser code as compared to Vanilla.JS</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-logo">
                            <FontAwesomeIcon icon={faNodeJs} size="5x" style={{color: "#11111",}}/>
                            <h4 className="service-head">Node.JS</h4>
                            </div>
                            <div className="service-description">
                                <p>I use Node.JS to create high performant server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                            </div>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="row services">
                        <div className="col-md-6">
                            <div className="service-logo">
                            <FontAwesomeIcon icon={faWordpress} size="5x" style={{color: "#11111",}}/>
                            <h4 className="service-head">WordPress</h4>
                            </div>
                            <div className="service-description">
                                <p>I use WordPress to host and build websites. It contains plugin architecture and a template system, so I can customize any website to fit your business, blog, portfolio, or online store.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-logo">
                            <FontAwesomeIcon icon={faBootstrap} size="5x" style={{color: "#11111",}}/>
                            <h4 className="service-head">Bootstrap / Tailwind</h4>
                            </div>
                            <div className="service-description">
                                <p>I use Bootstrap/Tailwind to make responsive web design a reality. It makes it possible for a web page or app to detect the visitor's screen size and orientation and automatically adapt the display accordingly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="services">
                        {/* <div className="col-md-3"></div> */}
                        {/* <div className="col-md-6"> */}
                        <div className="service-logo">
                            <FontAwesomeIcon icon={faJava} size="5x" style={{color: "#11111",}}/>
                            <h4 className="service-head">Java / C / C++</h4>
                            </div>
                            <div className="service-description special">
                                <p>I have excellent problem solving skills with having 100+ questions solved on various coding platforms like LeetCode, HackerRank, GeeksforGeeks and CodeChef. I have participated in multiple Competitive Programming competitions hosted by Google, Microsoft and others using Java and C++.</p>
                            </div>
                        {/* </div> */}
                        {/* <div className="col-md-3"></div> */}
                    </div>

                    <div className="spacer"></div>

                    <div className="skills">
                        <h4>My Skills:</h4>
                        <p>HTML/CSS/JavaScript, React.JS, Node.JS, Tailwind CSS, Bootstrap, SCSS, C++, Java, Competitive Programming, Creative Problem Solving, WordPress</p>
                        <h4>Experience:</h4>
                        <p>Web Developer at Discover iTech, Houston,
                        TX 77099, USA (Remote)</p>
                        <p>Intern at Nexosol, Jun 2020 - Aug 2020</p>
                        <h4>Honors & Awards:</h4>
                        <p><b>Winner ACM DSU FreshMen Cup'22</b> (Associated with DHA Suffa University)</p>
                        
                        <p><b>Runner-Up Speed Debugging ProCom'23</b> (Associated with National University of Computer and Emerging Sciences)</p>
                    

                        <p><b>2531 Rank in Google CodeJam'23</b> (Associated with Google)</p>
                        
                    </div>
                    

                </div>

            </center>
        </>
    );
}

export default Hero;