import React from 'react'


export default ({ popularLinks  }) => {
    return(
    
    <section id="online-events" className="online-events section-bg">
<div className="container" data-aos="fade-up">

  <div className="section-title">
  
    <h3>Online Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
  </div>

<div className="row">
{
      popularLinks && popularLinks.map(({ date, time, event, image }, index) => 
      
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="member">
              <div className="member-img">
                  <img src={ image } className="img-fluid" alt=""/>
                  <div className="social">
                    <a href="single.html"><i className="bi bi-twitter"></i></a>
                    <a href="single.html"><i className="bi bi-facebook"></i></a>
                    <a href="single.html"><i className="bi bi-instagram"></i></a>
                    <a href="single.html"><i className="bi bi-linkedin"></i></a>
                  </div>
              </div>
              
              <div>
                  <div className="online-share">
                      <div className="online-share-icon">
                          <a className="share-icon" href="index.html"><ion-icon name="share-social-outline"></ion-icon></a>
                      </div>
                      <div className="online-share-icon">
                          <a className="share-icon" href="index.html"><ion-icon name="heart"></ion-icon></a>
                      </div>
                  </div>
                  
                  <div className="member-info">
                      <span>{ date }, { time } EAT</span>
                      <h4> { event }</h4>
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