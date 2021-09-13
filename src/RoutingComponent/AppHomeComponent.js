import React from "react";
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import LoginComponent from './LoginComponent';
  const HomeComponent=()=>(
      <>
      <h2>Amazon Home</h2>
      <p>Online Shopping</p>
      </>
  )
  const ContactComponent=()=>(
      <>
      <h2>Contact Us</h2>
      <p>help@amazon.in</p>
      </>
  )
  export default class AppHomeComponent extends React.Component 
  {
      render(){
          return(
              <Router>
                  <header>
                      <span><Link to="/home">Home</Link></span>
                      <span>|</span>
                      <span><Link to="/contact">Contact</Link></span>
                      <span>|</span>
                      <span><Link to="/login">Login</Link></span>
                  </header>
                  <hr/>
                  <Route path="/home"component={HomeComponent}/>
                  <Route path="/contact"component={ContactComponent}/>
                  <Route path="/login"component={LoginComponent}/>
              </Router>
          )
      }
  }