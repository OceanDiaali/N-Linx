import React, { Component } from 'react';
import '../../App.css';
import './images.css';



export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            hits: []
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => this.loadData(), 36000);
        this.loadData();
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadData() {
        //fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=40f233687a574369b42c8cd177ab60e0')
        fetch('https://pixabay.com/api/?key=12131375-1b6762dd5593f8b8d6a7b2f3f&image_type=photo&category=music&order=latest')
          .then(res => res.json())
          .then(
              (result) => {
            this.setState({
                isLoaded: true,
                hits: result.hits
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
      )
    }

    render() {
        const { error, isLoaded, hits } = this.state;
        if (error) {
            return <div className="status-indicator">
              <h4>Something's not right..</h4>
              <p>Please, check your connection or refresh the page.</p>
            </div>;
          } else if (!isLoaded) {
            return <div className="status-indicator">
              <h4>checking for images..</h4>
              </div>;
        } else {
        return(
            <div className="container-fluid">
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {hits.map(hit => (
                <div className="d-flex flex-column">
                  
                    <div>
                    <a href={hit.pageURL} target="_blank" rel="noopener noreferrer"><img src={hit.previewURL} alt={hit.user} className="img-fluid scale"/></a><br/>
                    <img src="../../heart.png" alt="Likes" id="heart"/><span id="likes">{hit.likes}</span>

                    </div>

                </div>    
                    ))}
              
            </div>
            </div>
        );
        }
    }
} // class