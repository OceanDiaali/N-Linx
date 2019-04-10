import React, { Component } from 'react';
import '../../App.css';
import './chat.css';

export default class Chat extends Component {
    render() {
        return(
            <div class="container text-center">
              <img src="../../point_finger.png" alt="pointing finger" id="finger"/>
              <a href="https://assistant-chat-us-east.watsonplatform.net/web/public/6bfb32ca-ecc1-4a6f-82ee-b0d2935b4d1a" target="_blank" rel="noopener noreferrer" class="btn btn-info" role="button" id="chat-btn">Launch Chat</a>
              <p className="chat-label">The button launches a PREVIEW of the Virtual Assistant in  a new tab or window (depending on your browser configuration)</p>
            </div>
        );
    }
}