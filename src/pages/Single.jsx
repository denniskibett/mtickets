import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Single = () => {

    function groupAndCalc(data) {
        const map = data.reduce((acc, item) => {
            const key = item.type;
            let group = acc.get(key);
            if (!group) {
            group = { type: key, total: 0, items: [] };
            acc.set(key, group);
            }
        
            group.items.push(item);
            group.total += item.price * item.quantity;
            
            return acc;
        }, new Map());
        
        return Array.from(map.values());
    }


    const ticketLinks = [
        {
          ticketID: 1,
          type: 'ADVANCE TICKET',
          price: 1400,
          quantity: 0,
          start: '07 Apr 2022',
          end: '07 May 2022',
          status: 'Sold Out',
          qty: '400'
         
        },
        {
          ticketID: 2,
          type: 'GATE TICKET',
          price: 2800,
          quantity: 0,
          start: '07 Apr 2022',
          end: '07 May 2022',
          status: 'Active',
          qty: '400'
         
        },
        {
          ticketID: 3,
          type: 'VIP TICKET',
          price: 7000,
          quantity: 0,
          start: '07 Apr 2022',
          end: '07 May 2022',
          status: 'Active',
          qty: '400'
         
        }
      ]

      
 
    
  
  return (
    <div>
      <h1>Single Page</h1>
       
        <Header></Header>   
        <main>
            <section class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Event Name</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="portfolio.html">Events</a></li>
                            <li>Event Name</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="portfolio-details" class="portfolio-details">
            <div class="container">

                <div class="row gy-4">

                <div class="col-lg-7">
                    <div class="portfolio-details-slider swiper">
                        <div class="swiper-wrapper align-items-center">

                            <div class="swiper-slide">
                                <img src="assets/img/events/rema.jpeg" alt=""/>
                            </div>

                        <div class="swiper-slide">
                            <img src="assets/img/events/amapianocrunch.png" alt=""/>
                        </div>

                        <div class="swiper-slide">
                            <img src="assets/img/portfolio/portfolio-details-3.jpg" alt=""/>
                        </div>

                    </div>
                    <div class="swiper-pagination"></div>
                    </div>
                    <div class="portfolio-description">
                    <h2>About this Event</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam fringilla nulla lorem, eget vulputate magna euismod interdum. 
                        Nam dignissim tempus ante, pretium bibendum elit auctor quis. 
                        Aenean ullamcorper nulla eu commodo vestibulum. In hac habitasse platea dictumst. Donec lectus est, aliquet quis mauris at, pharetra pulvinar ligula. Mauris fringilla massa eget rhoncus tincidunt. Proin porta quam id dui bibendum, suscipit aliquam nulla porttitor. Donec sit amet nunc congue, mollis eros ac, mattis ligula. Morbi ac sagittis neque.
                        <br/>
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        2. Nunc feugiat felis quis quam dignissim mattis.<br/>
                        3. In gravida felis cursus leo fringilla, eget rutrum neque fermentum.<br/>
                        4. Morbi pellentesque elit ut erat fringilla, a mollis ligula elementum.<br/>
                        5. Fusce condimentum ligula at elit luctus, condimentum tincidunt diam vulputate.<br/>

                        </p>
                        <p>Nam ut erat dui. Phasellus volutpat ut lorem eget tincidunt. Quisque eleifend vestibulum metus, eget tristique elit molestie eget. Donec eu est ornare, cursus nisl quis, mattis augue. Curabitur dignissim ornare justo, sed viverra velit fringilla at. Nunc eleifend convallis turpis in placerat. Maecenas condimentum tincidunt dolor eu imperdiet. Cras nec lorem et ex eleifend sodales. Ut sit amet convallis justo.
                        </p><br/>
                        1. Lorem ipsum dolor sit amet, consectetur
                    
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="portfolio-info">
                        <h3>Soul Train - Sauti Soul East Africa Tour</h3>
                        <h6>Hosted by <strong>Wasafi Music</strong></h6>
                        <ul>
                            <li><strong>Date</strong>: Sat, December 21, 2021</li>
                            <li><strong>Time</strong>: 9:00 PM – 10:00 PM EAT</li>
                            <li><strong>Location</strong>: Carnivore Grounds</li>
                            <li><strong>Event URL</strong>: <a href="index.html">www.example.com</a></li>
                        </ul>

                         <hr/>
                        <table class="table align-middle mb-0 bg-white">
                        
                            <tbody>
                            {groupAndCalc(ticketLinks).map((group) => {
                                
                            return (
                            <React.Fragment key={group.type}>
                               
                               
                                
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                        {group.items.map((row) => (
                                            <div class="ms-0">
                                                <p class="fw-bold mb-1">{ group.type }</p>
                                                <p class="fw-normal mb-1">KES { row.price }</p>
                                                <span class="badge badge-success rounded-pill d-inline">{ row.status }</span>
                                            
                                            </div>
                                             ))}
                                        </div>
                                    </td>
                                
                                    <td class="counter">
                                        <select class="form-control" id="quantity" onchange={groupAndCalc} >
                                            <option>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        </td>
   
                                    <td>                                  
                                     KES {group.total}
                                    </td>
                                </tr>

                               </React.Fragment> 
                            );
                        })}
                            </tbody>
                        </table>

                        
                            
                        <div class="container py-5">
                                
                            <div class="row">
                                <div class="col-lg-12 mx-auto">
                                    <div class="card ">
                                        <div class="card-header">
                                            <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                                <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3" >
                                                    
                                                    <li class="nav-item"> <a data-toggle="pill" href="#mpesa" class="nav-link active " style={{ marginTop: "0px" }}> <i class="fas fa-mobile-alt mr-2"></i> Mpesa </a> </li>
                                                    <li class="nav-item"> <a data-toggle="pill" href="#credit-card" class="nav-link " style={{ marginTop: "-10px" }}> <i class="fas fa-credit-card mr-2"></i> Bank </a> </li>
                                                </ul>
                                            </div> 
                                            
                                            <div class="tab-content">
                                                <div id="mpesa" class="tab-pane fade show active pt-3">
                                                                                            
                                                    <form class="ticket-info">
                                                        <h6 class="pb-2">Enter Your Phone Number</h6>
                                                        <div class="input-group">
                                                            <input type="text"></input>
                                                        </div>
                                                    </form>
                                                    <button type="submit" class="btn btn-primary checkout">MPESA Checkout</button>
                                                    <p class="text-muted"> 
                                                    Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                                </div> 
                                                
                                                <div id="credit-card" class="tab-pane fade pt-3">
                                                    <form onsubmit="event.preventDefault()">
                                                        <div class="form-group"> <label for="username">
                                                                <h6>Card Owner</h6>
                                                            </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control"/> 
                                                        </div>
                                                        <div class="form-group"> <label for="cardNumber">
                                                                <h6>Card number</h6>
                                                            </label>
                                                            <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required/>
                                                                <div class="input-group-append"> 
                                                                    <span class="input-group-text text-muted"> 
                                                                        <i class="fab fa-cc-visa mx-1"></i>
                                                                        <i class="fab fa-cc-mastercard mx-1"></i> 
                                                                        <i class="fab fa-cc-amex mx-1"></i> 
                                                                    </span> 
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-sm-8">
                                                                <div class="form-group"> 
                                                                    <label>
                                                                        <span class="hidden-xs">
                                                                            <h6>Expiration Date</h6>
                                                                        </span>
                                                                    </label>
                                                                    <div class="input-group"> 
                                                                        <input type="number" placeholder="MM" name="" class="form-control" required /> 
                                                                        <input type="number" placeholder="YY" name="" class="form-control" required /> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-4">
                                                                <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                                        <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                                    </label> <input type="text" required class="form-control"/> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card-footer"> 
                                                            <button type="button" class="subscribe btn btn-primary btn-block shadow-sm"> Confirm Payment </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>                  
                    
                    </div>

                </div>

            </div>
            </div>
            </section>
        </main>
        <Footer></Footer>

    </div>
  )
}
  
export default Single;