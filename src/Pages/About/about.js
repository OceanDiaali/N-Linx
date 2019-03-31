import React from 'react';
import Header from '../../HeaderComponent';
import Footer from '../../FooterComponent';

export default class Business extends React.Component {
    render() {
        return(
            <div>
            <Header/>
            <h1 className="label">About Page</h1>
            <p>N-Linx is where you get the web links to latest gist!</p>
            <p>It is simply a collection of stories from varied sources which is served via web links</p>
            <p>Just click on any story you fancy, and you shall be directed to its source.You will have to use the "back button" on your device to return to our app though.</p>
            <p>Please, do.</p>

            <img src="../../ocean-red.jpg" alt="ocean" id="about-owner"/>
            <p>It was put together by Ocean Semreh Diaali</p>

            <Footer/>
            </div>
        );
    }
}