import React from 'react';  
import './App.css';  
import Header from './components/Header';
import Slider from './components/Slider';
import Upcomingevents from './components/Upcomingevents';
import Popularevents from './components/Popularevents';
import Onlinevents from './components/Onlinevents';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Footer from './components/Footer';


import Single from './pages/Single';
import Tickets from './pages/Tickets';



function App() {  
  const upcomingLinks = [
    {
      day: '30',
      month: 'Apr',
      event: 'SUMMER VYBZ with WSTRN',
      location: 'Waterfront, Karen'
    },

    {
      day: '07',
      month: 'May',
      event: 'REMA MNE FEST',
      location: 'Carnivore'
    },
    
    {
      day: '30',
      month: 'Nov',
      event: 'Sol Train - Sauti Sol EA Tour',
      location: 'Waterfront, Karen'
    }
  ]

  const popularLinks = [
    {
      date: '30 Apr 2022',
      time: '9:00 PM',
      event: 'SUMMER VYBZ with WSTRN',
      location: 'Waterfront, Karen',
      image: 'assets/img/events/wstrn.jpeg'
    },

    {
      date: '07 May 2022',
      time: ' 8:00 PM',
      event: 'REMA MNE FEST',
      location: 'Waterfront, Karen',
      image: 'assets/img/events/rema.jpeg'
    },
    
    {
      date: '04 June 2022',
      time: '8:00 PM',
      event: 'The Hunters Cider Amapiano 1ST Anniv',
      location: 'Nakuru',
      image:'assets/img/events/amapianoke.jpeg'
    },
    
    {
      date: '1st May 2022',
      time: '6:00 PM',
      event: 'Black Boy Joy',
      location: 'Kenya National Theatre',
      image:'assets/img/events/bbj.jpeg'
    },
    
    {
      date: '21st Feb 2022',
      time: '6:00 PM',
      event: 'THE MARIE PIERRE SATURDAY BBQ',
      location: 'Tayiana Gardens Estate',
      image:'assets/img/events/bbq.jpeg'
    },

    {
      date: '9th Apr 2022',
      time: '6:00 PM',
      event: 'Amapiano Crunch',
      location: 'Enchula Resort',
      image:'assets/img/events/amapianocrunch.png'
    },
    
    {
      date: '14th Dec 2019',
      time: '6:00 PM',
      event: 'Kenya Nights pres. Major Lazer',
      location: 'Ngong Racecourse',
      image:'assets/img/events/kn.jpg'
    },

    {
      date: '10th Dec 2021',
      time: '6:00 PM',
      event: 'Most Wanted pres. Wstrn',
      location: 'Ngong Racecourse',
      image:'assets/img/events/wstrn.jpeg'
    }
  ]

  const ticketLinks = [
    {
      ticketID: '01',
      Type: 'Advance Ticket',
      price: 'KES 1400',
      start: '07 Apr 2022',
      end: '07 May 2022',
      qty: '400'
     
    },
    {
      ticketID: '02',
      Type: 'Gate Ticket',
      price: 'KES 2800',
      start: '07 Apr 2022',
      end: '07 May 2022',
      qty: '400'
     
    },
    {
      ticketID: '03',
      Type: 'VIP Ticket',
      price: 'KES 7000',
      start: '07 Apr 2022',
      end: '07 May 2022',
      qty: '400'
     
    }
  ]

  return (  
     <div className="App">  
       <Header></Header>   

      <Slider></Slider>

  <main id="main">

    <Upcomingevents upcomingLinks={ upcomingLinks }></Upcomingevents>
      
    <Popularevents popularLinks={ popularLinks }></Popularevents>

    <Onlinevents popularLinks={ popularLinks }></Onlinevents> 

    <Stats></Stats> 
    
  <Clients></Clients>
  <Single></Single>
    
  </main> 

  <Footer></Footer>
  
  
  <a href="index.html" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
	
     </div>  
  );  
}  
  
export default App;  
