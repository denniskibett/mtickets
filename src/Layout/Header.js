import React, { Component } from 'react';
import'bootstrap/dist/css/bootstrap.min.css'

export class Header extends Component {  
    render() {  
        return (  
            <div>
                <div /*id="preloader"*/></div>
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

                    
                        <a href="index.html" ClassName="logo"><img src="../assets/img/logo.png" alt=""/></a>

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

                
                <div id="hero" ClassName="d-flex align-items-center">
                    <div ClassName="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1>Make your dream come true at the National Museum</h1>
                        
                        <div ClassName="slider-caption">
                            
                            <span ClassName="caption">
                                <ion-icon name="time-outline"></ion-icon>21 FEB 2021 at 8:00 am
                            </span>
                            <span>
                                <ion-icon name="location-outline"></ion-icon>
                                Kenya National Museum, Nairobi Kenya 
                            </span>
                        
                        </div>
                    
                    <div ClassName="d-flex">
                       
                        <div ClassName="card" style={{ width: "70rem", height: "5em", borderRadius: "10px", marginTop: "5em", padding: "0.5em" }}>
                            <div ClassName="">
                                <div ClassName="searchfield">
                                    <div ClassName="row">
                                        <div ClassName="col-md-1 icon-size">
                                            <ion-icon name="search-outline"></ion-icon>
                                        </div>
                                        
                                        <div ClassName="col-md-2">
                                            <span ClassName="card-info-top">Searching for ...</span>
                                            <p ClassName="card-info-bottom">Bring me the Horizon</p>
                                        </div>
                                        <div ClassName="col-md-1 icon-size">
                                            <ion-icon name="navigate-outline"></ion-icon>
                                        </div>
                                        
                                        <div ClassName="col-md-3">
                                            <span ClassName="card-info-top">Where it should be?</span>
                                            <p ClassName="card-info-bottom">Nairobi, Kenya</p>
                                        </div>
                                        <div ClassName="col-md-1 icon-size">
                                            <ion-icon name="calendar-number-outline"></ion-icon>
                                        </div>
                                        
                                        <div ClassName="col-md-2">
                                            <span ClassName="card-info-top">On Which Date?</span>
                                            <p ClassName="card-info-bottom">30.04.22</p>
                                        </div>
                                        
                                        <div ClassName="col-md-2 btn-wrap">
                                            <button type="button" ClassName="btn btn-searchfield"><a href="index.html" ClassName="btn-buy">SEARCH</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    </div>
                    <div ClassName="heroslider">
                        <div ClassName="searchfield">
                            
                        </div>
                    </div>
                </div>
                
                
                <main id="main">

                    
                    <section id="upcoming-events" ClassName="upcoming-events">
                    <div ClassName="container" data-aos="fade-up">
                        <div ClassName="div-title">
                       
                        <h3>Upcoming Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
                        
                        </div>
                        
                        
                        <div ClassName="body2310-group50231629">
                            <div ClassName="body2310-group49231631">
                                
                                
                                <span ClassName="body2310-text159">
                                    <ion-icon name="navigate-outline"></ion-icon>
                                    <input type="email" ClassName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search Events by Location"/>
                                    <ion-icon name="close-outline"></ion-icon>
                                </span>
                            </div>
                        </div><br/>
                                    
                        <div ClassName="row">
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">30</span>
                                                <span ClassName="upcoming-month">Apr</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">SUMMER VYBZ with WSTRN</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Waterfront, Karen</p>
                                </div>
                            </div>
                            
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">07</span>
                                                <span ClassName="upcoming-month">May</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">REMA MNE FEST</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Carnivore Grounds</p>
                                </div>
                            </div>
                            
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">04</span>
                                                <span ClassName="upcoming-month">Jun</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">The Hunter's Cider Amapiano 1ST ANNIVERSARY</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Nairobi, kenya</p>
                                </div>
                            </div>
                            
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">25</span>
                                                <span ClassName="upcoming-month">NOV</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">Soul Train - Sauti Soul East Africa Tour</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Nairobi, kenya</p>
                                </div>
                            </div>
                            
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">25</span>
                                                <span ClassName="upcoming-month">NOV</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">Soul Train - Sauti Soul East Africa Tour</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Nairobi, kenya</p>
                                </div>
                            </div>
                            
                            <div ClassName="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div ClassName="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="row">
                                    <div ClassName="icon">
                                            <div ClassName="upcoming-date">
                                                <span ClassName="upcoming-day">25</span>
                                                <span ClassName="upcoming-month">NOV</span>
                                            </div>
                                        </div>
                                        <h4 ClassName="title upcoming-name"><a href="single.html">Soul Train - Sauti Soul East Africa Tour</a></h4>
                                    </div>
                                    <p ClassName="description"><ion-icon name="location-outline"></ion-icon> Nairobi, kenya</p>
                                </div>
                            </div>
                            
                            
                        
                        </div>

                    </div>
                </section>


                <div id="popular-events" ClassName="popular-events">
                    <div ClassName="container" data-aos="fade-up">

                        <div ClassName="section-title">
                       
                        <h3>Popular Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
                        </div>

                        <div ClassName="row">
                        
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/rema.jpeg" alt="" />

                                    
                                    <div ClassName="popular-events-card">
                                        <div ClassName="get-ticket-btn">
                                            <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                        </div>
                                        <span ClassName=""><h4><a href="single.html">REMA MNE FEST</a></h4></span>
                                        <div ClassName="popular-details">
                                            <span><ion-icon name="time-outline"></ion-icon> 07 May 2022 at 8:00 am</span>
                                            <span><ion-icon name="location-outline"></ion-icon> Carnivore Grounds</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/wstrn.jpeg" alt="" />

                                    
                                    <div ClassName="popular-events-card">
                                        <div ClassName="get-ticket-btn">
                                            <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                        </div>
                                        <span ClassName=""><h4><a href="single.html">SUMMER VYBZ with WSTRN</a></h4></span>
                                        <div ClassName="popular-details">
                                            <span><ion-icon name="time-outline"></ion-icon> 30 Apr 2022 at 9:00 pm</span>
                                            <span><ion-icon name="location-outline"></ion-icon> Waterfront, Karen</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/amapianoke.jpeg" alt="" />

                                        <div ClassName="popular-events-card">
                                            <div ClassName="get-ticket-btn">
                                                <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                            </div>
                                            <span ClassName=""><h4><a href="single.html">The Hunter's Cider Amapiano 1ST ANNIVERSARY</a></h4></span>
                                            <div ClassName="popular-details">
                                                <span><ion-icon name="time-outline"></ion-icon> 04 June 2022 at 8:00 am</span>
                                                <span><ion-icon name="location-outline"></ion-icon> Nakuru</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/bbj.jpeg" alt="" />

                                    
                                    <div ClassName="popular-events-card">
                                        <div ClassName="get-ticket-btn">
                                            <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                        </div>
                                        <span ClassName=""><h4><a href="single.html">Black boy Joy</a></h4></span>
                                        <div ClassName="popular-details">
                                            <span><ion-icon name="time-outline"></ion-icon> 1st May 2022 at 6:00 pm</span>
                                            <span><ion-icon name="location-outline"></ion-icon> Kenya National Theatre</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/amapianocrunch.png" alt="" />

                                    
                                    <div ClassName="popular-events-card">
                                        <div ClassName="get-ticket-btn">
                                            <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                        </div>
                                        <span ClassName=""><h4><a href="single.html">Amapiano Crunch</a></h4></span>
                                        <div ClassName="popular-details">
                                            <span><ion-icon name="time-outline"></ion-icon> 21 Feb 2021 at 8:00 am</span>
                                            <span><ion-icon name="location-outline"></ion-icon> Enchula Resort</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div ClassName="icon-box">
                                    <div ClassName="">
                                        <img ClassName="popular-img img-fluid" src="assets/img/events/bbq.jpeg" alt="" />

                                    
                                    <div ClassName="popular-events-card">
                                        <div ClassName="get-ticket-btn">
                                            <button type="button" ClassName="btn btn-ticket"><a ClassName="get-ticket" href="index.html">Get Ticket</a></button>
                                        </div>
                                        <span ClassName=""><h4><a href="single.html">THE MARIE PIERRE SATURDAY AFTERNOON BBQ</a></h4></span>
                                        <div ClassName="popular-details">
                                            <span><ion-icon name="time-outline"></ion-icon> 21 Feb 2021 at 8:00 am</span>
                                            <span><ion-icon name="location-outline"></ion-icon> Tayiana Gardens Estate</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    <div/>
                </div>
            </div>
                    

            <section id="online-events" ClassName="online-events section-bg">
                    <div ClassName="container" data-aos="fade-up">

                        <div ClassName="section-title">
                        <h3>Online Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
                        </div>

                        <div ClassName="row">
                        
                            
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                    <div ClassName="member-img">
                                        <img src="assets/img/events/rema.jpeg" ClassName="img-fluid" alt=""/>
                                        <div ClassName="social">
                                        <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                        <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                        <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                        <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                        
                                        <div ClassName="member-info">
                                            <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                            <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/events/wstrn.jpeg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/events/bbj.jpeg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/event.jpg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/event.jpg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/event.jpg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/event.jpg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                            <div ClassName="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div ClassName="member">
                                <div ClassName="member-img">
                                    <img src="assets/img/event.jpg" ClassName="img-fluid" alt=""/>
                                    <div ClassName="social">
                                    <a href="single.html"><i ClassName="bi bi-twitter"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-facebook"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-instagram"></i></a>
                                    <a href="single.html"><i ClassName="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div ClassName="member-info">
                                        <div ClassName="online-share">
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                                            </div>
                                            <div ClassName="online-share-icon">
                                                <a ClassName="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                                            </div>
                                        </div>
                                
                                    <span>Thu, Dec 10, 2020 10:00 PM EAT</span>
                                    <h4> Marina Hyde and John Crace A year in Nairobi</h4>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </section>

                    <section id="parallax" ClassName="parallax">
                        <div ClassName="container" data-aos="zoom-in">
                            
                            
                            <div ClassName="row">
                                <div ClassName="col-lg-4 parallax-box">
                                    <h1><center>598</center></h1>
                                    <h4>ACTIVE EVENTS</h4>
                                </div>
                                <div ClassName="col-lg-4 parallax-box">
                                    <h1><center>16,173</center></h1>
                                    <h4>ACTIVE USERS</h4>
                                </div>
                                <div ClassName="col-lg-4 parallax-box">
                                    <h1><center>136,874</center></h1>
                                    <h4>ATICKETS SOLD</h4>
                                </div>
                                
                            </div>
                        </div>
                    </section>  
                
                    <section id="clients" ClassName="clients section-bg">
                        <div ClassName="container" data-aos="zoom-in">

                            <div ClassName="row">

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-1.png" ClassName="img-fluid" alt=""/>
                                </div>

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-2.png" ClassName="img-fluid" alt=""/>
                                </div>

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-3.png" ClassName="img-fluid" alt=""/>
                                </div>

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-4.png" ClassName="img-fluid" alt=""/>
                                </div>

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-5.png" ClassName="img-fluid" alt=""/>
                                </div>

                                <div ClassName="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-6.png" ClassName="img-fluid" alt=""/>
                                </div>

                            </div>

                        </div>
                    </section>
                    
                </main>

            </div>
        )

    }  
}  
  
export default Header  
