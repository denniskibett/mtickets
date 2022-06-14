import React, { Component, Suspense } from 'react';  
import Header from './Header'  
import Footer from './Footer'  
//import Home from '../Home'  
//import { Route, Switch, Redirect } from 'react-router-dom';  

export class Layout extends Component {  
    render() {  
        return (  
            <div>  
                <Header />  
                <Footer />  
            </div>  
        )  
    }  
}  
  
export default Layout  