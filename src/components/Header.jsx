
import React from 'react'

export default () => {
    return(

        <>
        <div /*id="preloader"*/></div>
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:info@mtickets.com">info@mtickets.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+254790 229 229</span></i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="https://twitter.com/mticketskenya" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com/mticketske/" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/mticketske/" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="index.html" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </section>
        
        <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#upcoming-events">Upcoming Events</a></li>
                            <li><a className="nav-link scrollto" href="#popular-events">Popular Events</a></li>
                            <li><a className="nav-link scrollto" href="#online-events">Online-Events</a></li>

                        </ul>

                        <ul>
                            <li><a href="index.html">
                                <div className="login">
                                    <span className="body2310-text179">Log in</span>
                                </div></a>
                            </li>
                            <li><a href="index.html">
                                <div className="sign-up">
                                    <span className="signup-text">Sign Up</span>
                                </div></a>
                            </li>
                        </ul>

                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header></>
           )
        }