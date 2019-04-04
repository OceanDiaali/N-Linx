import React from 'react';
import '../../App.css';


export default class Sports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            articles: []
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
        fetch('https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=40f233687a574369b42c8cd177ab60e0')
          .then(res => res.json())
          .then(
              (result) => {
            this.setState({
                isLoaded: true,
                articles: result.articles
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
        const { error, isLoaded, articles } = this.state;
        if (error) {
            return <div className="status-indicator">
              <h4>Oops! I've lost network..</h4>
              <p>Please,check your connection and refresh the page.</p>
            </div>;
          } else if (!isLoaded) {
            return <div className="status-indicator">
              <h4>just a moment..</h4>
            </div>;
        } else {
        return(
            <div>
                
            <div className="container">
            
              <ul className="list-group list-group-flush">
                  {articles.map(article => (
                      
                      <li className="list-group-item" key={article.title}>
                        <img className=" shadow-lg border border-primary thumb" src={article.urlToImage} alt={article.author}/>
                        <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
                      </li>
                  ))}
              </ul>
            </div>
                
            </div>
        );
        }
    }
} // class