import React from 'react'


export default ({ popularLinks  }) => {
    return(
    
    <section id="popular-events" className="popular-events">
<div className="container" data-aos="fade-up">

  <div className="section-title">
    
    <h3>Popular Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
  </div>

  <div className="row">
  
      {
            popularLinks && popularLinks.map(({ date,time,event,image,location }, index) => 
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box">
              <div className="">
                  <img className="popular-img img-fluid" src={ image } alt="" />

              
              <div className="popular-events-card">
                  <div className="get-ticket-btn">
                       <button type="button" className="btn btn-ticket"><a className="get-ticket" href="index.html">Get Ticket</a></button>
                  </div>
                  <span className=""><h4><a href="single.html">{ event }</a></h4></span>
                  <div className="popular-details">
                      <span><ion-icon name="time-outline"></ion-icon> { date } at { time }</span>
                      <span><ion-icon name="location-outline"></ion-icon> { location }</span>
                  </div>
              </div>
          </div>
          </div>
      </div>
        )
		
    }

  

        </div> 
    </div>
</section> 

    )
}
