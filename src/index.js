import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import Entertainment from './Pages/Entertainment/entertainment';
import Business from './Pages/Business/business';
import Home from './Pages/Home/home';
import Sports from './Pages/Sports/sports';
import Health from './Pages/Health/health';
import About from './Pages/About/about';
import Tech from './Pages/Tech/tech';


const routing = (
<Router>
  <Route exact path="/" component={App} />
  <Route exact path="/home" component={Home}/>
  <Route exact path="/entertainment" component={Entertainment} />
  <Route exact path="/business" component={Business} />
  <Route exact path="/sports" component={Sports} />
  <Route exact path="/health" component={Health} />
  <Route exact path="/technology" component={Tech}/>
  <Route exact path="/about" component={About} />
</Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
