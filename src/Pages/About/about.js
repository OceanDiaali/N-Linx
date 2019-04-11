import React from 'react';

import './about.css';
//import './test';

export default class About extends React.Component {
    render() {
        return(
            <div>

            <h1 className="label">n-linx info</h1>
            <p>n-linx provides you with regular feeds of the latest news from your country and around the world</p>
            <p>Scroll through a collection of news stories from varied sources which is served via WEB LINKS - hence, the name.</p>
            <p>Each story will open in a new window or tab(depending on your browser configuration).</p>
            <p>Our app would still be open, and we'd like you to return once you're done reading..</p>
            <p>Please, do.</p>

            <img src="../../ocean-red.jpg" alt="ocean" id="about-owner"/>
            <p>Architecture by Ocean Semreh Diaali</p>

            <div id="media-link" className="d-flex justify-content-center">
              <a href="https://twitter.com/oceandiaali" target="_blank" rel="noopener noreferrer"><img src="../../twitter-logo.png" alt="twitter" className="img-logo"/></a>
              <a href="https://linkedin.com/in/oceandiaali" target="_blank" rel="noopener noreferrer"><img src="../../linkedin-logo.png" alt="linkedin" className="img-logo"/></a>
              <a href="https://facebook.com/oceandiaali" target="_blank" rel="noopener noreferrer"><img src="../../facebook-logo.png" alt="facebook" className="img-logo"/></a>
            </div>
            <div id="message-box">
            <h2>Send Ocean a message</h2>
            <form className="ui-form">
                <textarea placeholder="this isn't functional at the moment.." rows="3"/><br/>
                <input type="submit" value="Send" id="msg-btn"/>
            </form>
            </div>

            </div>
        );
    }
}