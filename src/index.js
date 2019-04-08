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
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Images from './Pages/Images/images';


const routing = (   
<Router>
<Header/> 
  <Route exact path="/" component={App} />
  <Route exact path="/home" component={Home}/>
  <Route exact path="/entertainment" component={Entertainment} />
  <Route exact path="/business" component={Business} />
  <Route exact path="/sports" component={Sports} />
  <Route exact path="/health" component={Health} />
  <Route exact path="/technology" component={Tech}/>
  <Route exact path="/images" component={Images}/>
  <Route exact path="/about" component={About} />
  <Footer/>
</Router>
);


ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
