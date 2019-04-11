import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return(
            <div>
                
                <div className="jumbotron jumbotron-fluid bg-info">
                <div className="container">
                  <h1 className="label">n-linx</h1>      
                  <p className="sub-label">Get all the latest, global news via links.</p>
                </div>
                </div>

                <div className="card-deck">
                  <div className="card bg-primary">
                  <img className="card-img-top" src="../../beyonce.png" alt="Entertainment"/>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/entertainment">Entertainment news and celebrity gossip</Link>
                    </div>
                  </div>
                  <div className="card bg-warning">
                  <img className="card-img-top" src="../../cash-wads.png" alt="Biz"></img>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/business">Read about all the business and financials</Link>
                    </div>
                  </div>
                  <div className="card bg-success">
                  <img className="card-img-top" src="../../techo.png" alt="Tech"></img>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/technology">Find news on tech and gadgets</Link>
                    </div>
                </div>
              </div>  

              <div className="card-deck">
                {/**second deck */}

                <div className="card bg-warning">
                  <img className="card-img-top" src="../../doctor.png" alt="Health"/>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/health">Learn the latest in health and wellness</Link>
                    </div>
                  </div>
                  <div className="card bg-success">
                  <img className="card-img-top" src="../../slamdunk.png" alt="Sports"></img>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/sports">Get all the latest sports stories</Link>
                    </div>
                  </div>
                  <div className="card bg-danger">
                  <img className="card-img-top" src="../../list.png" alt="Trending"></img>
                    <div className="card-body text-center card-img-overlay">
                      <Link className="card-text" to="/images">Download music photos</Link>
                    </div>
                </div>

              </div>

            </div>
        );
    }
    
} // class