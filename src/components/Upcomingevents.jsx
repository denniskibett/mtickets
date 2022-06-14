import React from 'react'



export default ({ upcomingLinks  }) => {
    return(

        <section id="upcoming-events" className="upcoming-events">
			<div className="container" data-aos="fade-up">
					<div className="section-title">
					
					<h3>Upcoming Events <ion-icon name="chevron-forward-outline"></ion-icon></h3>
					
				</div>
		
		
			
					
    <div className="row">
		{
                upcomingLinks && upcomingLinks.map(({ day,month,event, location }, index) => 
				<div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
						<div className="icon-box upcoming-card" data-aos="fade-up" data-aos-delay="100">
							<div className="row">
								<div className="icon">
									<div className="upcoming-date">
										<span className="upcoming-day">{day}</span>
										<span className="upcoming-month">{month}</span>
									</div>
								</div>
								<h4 className="title upcoming-name"><a href="single.html">{ event }</a></h4>
							</div>
							<p className="description"><ion-icon name="location-outline"></ion-icon> { location }</p>
						</div>
					</div>
				
			)
		
		}
			
    	</div>

    </div>
  </section> 

    )
}