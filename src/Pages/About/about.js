import React from 'react';

import './about.css';

export default class About extends React.Component {
    render() {
        return(
            <div>

            <h1 className="label">About N-Linx</h1>
            <p>N-Linx is where you get the web links to latest gist!</p>
            <p>It is simply a collection of stories from varied sources which is served via web links</p>
            <p>Just click on any story you fancy, and you shall be directed to its source.You will have to use the "back button" on your device to return to our app though.</p>
            <p>Please, do.</p>

            <img src="../../ocean-red.jpg" alt="ocean" id="about-owner"/>
            <p>Architecture by Ocean Semreh Diaali</p>

            <div id="message-box">
            <h2>Send Ocean a message</h2>
            <form className="ui-form">
                <textarea placeholder="type a message.." rows="3"/><br/>
                <input type="submit" value="Send" id="msg-btn" onClick="test()"/>
            </form>
            </div>

              <script>
                  function test() {
                      alert('This is not functional at the moment. Sorry')
                  }
              </script>
            </div>
        );
    }
}