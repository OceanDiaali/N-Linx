import React, { Component } from 'react';
import '../../App.css';
import './chat.css';

export default class Chat extends Component {
    render() {
        return(
            <div class="container text-center">
              <img src="../../point_finger.png" alt="pointing finger" id="finger"/>
              <a href="https://assistant-chat-eu-gb.watsonplatform.net/web/public/3787d149-eeb2-448e-92da-378c4e415335" target="_blank" rel="noopener noreferrer" class="btn btn-info" role="button" id="chat-btn">Launch Chat</a>
              <p className="chat-label">The button launches a PREVIEW of the Virtual Assistant in  a new tab or window (depending on your browser configuration)</p>
            </div>
        );
    }
}