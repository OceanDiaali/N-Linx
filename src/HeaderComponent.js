import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return(
            
            <div>
                <nav className="navbar navbar-expand-md bg-info navbar-dark">
                  <Link className="navbar-brand text-warning" to="/home">N-Linx</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>    
                  </ul>
            </div>  
                </nav>
            </div>
            
        );
    }
} // class