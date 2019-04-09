import React, { Component } from 'react';
import '../../App.css';
import './chat.css';

export default class Chat extends Component {
    render() {
        return(
            <div class="container text-center">
              <h2>Click the button to begin Chat</h2>
              <a href="https://assistant-chat-us-east.watsonplatform.net/web/public/c6e0fd59-abb3-466c-ba49-14bb69e191ed" target="_blank" rel="noopener noreferrer" class="btn btn-info" role="button" id="chat-btn">Launch Chat</a>
            </div>
        );
    }
}