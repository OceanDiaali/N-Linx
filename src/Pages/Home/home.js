import React, { Component } from 'react';
import Header from '../../HeaderComponent';
import Footer from '../../FooterComponent';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="label">Welcome to N-Linx!</h1>      
                  <p>N-Linx is the home of ALL the news a Nigerian would want.</p>
                </div>
                </div>

                <div className="card-deck">
                  <div className="card bg-primary">
                  <img className="card-img-top" src="../../tiwa_savage.jpeg" alt="Card"/>
                    <div className="card-body text-center card-img-overlay">
                      <p className="card-text">Get all the celebrity gossip!</p>
                    </div>
                  </div>
                  <div className="card bg-warning">
                  <img className="card-img-top" src="../../dubai-airport.jpg" alt="Card"></img>
                    <div className="card-body text-center card-img-overlay">
                      <p className="card-text">Find news on travel and business</p>
                    </div>
                  </div>
                  <div className="card bg-success">
                  <img className="card-img-top" src="../../lasgidi-map.png" alt="Card"></img>
                    <div className="card-body text-center card-img-overlay">
                      <p className="card-text">See what healthcare and sports do!</p>
                    </div>
                </div>
              </div>  

                <Footer/>
            </div>
        );
    }
    
} // class