import React, { Component } from 'react'  
//import { Link } from 'react-router-dom';  
export class Navbar extends Component {  
    render() {  
        return (  
            <div>   
                <div id="topbar" ClassName="d-flex align-items-center">
                    <div ClassName="container d-flex justify-content-center justify-content-md-between">
                        <div ClassName="contact-info d-flex align-items-center">
                            <i ClassName="bi bi-envelope d-flex align-items-center"><a href="mailto:info@mtickets.com">info@mtickets.com</a></i>
                            <i ClassName="bi bi-phone d-flex align-items-center ms-4"><span>+254790 229 229</span></i>
                        </div>
                        <div ClassName="social-links d-none d-md-flex align-items-center">
                            <a href="https://twitter.com/mticketskenya" ClassName="twitter"><i ClassName="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com/mticketske/" ClassName="facebook"><i ClassName="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/mticketske/" ClassName="instagram"><i ClassName="bi bi-instagram"></i></a>
                            <a href="index.html" ClassName="linkedin"><i ClassName="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <header id="header" ClassName="d-flex align-items-center">
                    <div ClassName="container d-flex align-items-center justify-content-between">

                    
                        <a href="index.html" ClassName="logo"><img src="assets/img/logo.png" alt=""/></a>

                    <nav id="navbar" ClassName="navbar">
                        <ul>
                            <li><a ClassName="nav-link scrollto active" href="index.htmlhero">Upcoming Events</a></li>
                            <li><a ClassName="nav-link scrollto" href="index.htmlpopular-events">Popular Events</a></li>
                            <li><a ClassName="nav-link scrollto " href="index.htmlonline-events">Online-Events</a></li>
                            <li><a ClassName="nav-link scrollto" href="index.htmlonline-events">Vouchers</a></li>
                        </ul>
                        
                        <ul>
                            <li><a href="index.html">
                                <div ClassName="login">
                                    <span ClassName="body2310-text179">Log in</span>
                                </div></a>
                            </li>
                            <li><a href="index.html">
                            <div ClassName="sign-up">
                                <span ClassName="signup-text">Sign Up</span>
                            </div></a>
                            </li>
                        </ul>
                        
                        <i ClassName="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                   
                    </div>
                </header>
            </div>
         )
    }  
}  
  
export default Navbar