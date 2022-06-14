import React from 'react'

export default () => {
    return(

      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>Make your dream come true at the National Museum</h1>
        
          <div className="slider-caption">
        
          <span className="caption">
            <ion-icon name="time-outline"></ion-icon>21 FEB 2021 at 8:00 am
          </span>
          <span>
            <ion-icon name="location-outline"></ion-icon>
            Kenya National Museum, Nairobi Kenya 
          </span>
        
        </div>
        
        <div className="d-flex">
            <div className="card" style={{ width: "70rem", height: "5em", borderRadius: "10px", marginTop: "5em", padding: "0.5em" }}>
              <div className="">
                <div className="searchfield">
                  <div className="row">
                    <div className="col-md-1 icon-size">
                      <ion-icon name="search-outline"></ion-icon>
                    </div>
                    
                    <div className="col-md-2">
                      <span className="card-info-top">Searching for ...</span>
                      <p className="card-info-bottom">Bring me the Horizon</p>
                    </div>
                    <div className="col-md-1 icon-size">
                      <ion-icon name="navigate-outline"></ion-icon>
                    </div>
                    
                    <div className="col-md-3">
                      <span className="card-info-top">Where it should be?</span>
                      <p className="card-info-bottom">Nairobi, Kenya</p>
                    </div>
                    <div className="col-md-1 icon-size">
                      <ion-icon name="calendar-number-outline"></ion-icon>
                    </div>
                    
                    <div className="col-md-2">
                      <span className="card-info-top">On Which Date?</span>
                      <p className="card-info-bottom">30.04.22</p>
                    </div>
                    
                    <div className="col-md-2 btn-wrap">
                      <button type="button" className="btn btn-searchfield"><a href="index.html" className="btn-buy">SEARCH</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heroslider">
          <div className="searchfield">
            
          </div>
        </div>
      </section>
      )
    }