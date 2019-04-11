import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return( 
                <footer className="bg-info">
                <Link className="navbar-brand text-warning" to="/home">n-linx</Link>
                <p>Built by QoboQo &copy; 2019 - 2022</p>
                </footer>
        );
    }
}