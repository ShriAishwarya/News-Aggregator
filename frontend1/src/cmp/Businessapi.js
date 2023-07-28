import React from 'react';
import axios from 'axios';
import './newsApi.css';

class BusinessFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: null,
    };
  }

  componentDidMount() {

    const apiKey = '0b6fee3e82c54a27ac9d4549362a7dde';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0b6fee3e82c54a27ac9d4549362a7dde';
    // const apiKey = '70b6785a1a0d4daa850b763635c32ac9';
    // const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=70b6785a1a0d4daa850b763635c32ac9';


    axios.get(apiUrl)
      .then(response => {
        if (response.status === 200 && response.data.status === 'ok') {
          this.setState({ articles: response.data.articles });
        } else {
          throw new Error('Failed to fetch news.');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { articles, error } = this.state;
  
    return (
        
      <div className="news-container">
        {error && <p>{error}</p>}
        {articles.map(article => (
          <div className="news-card" key={article.title}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </a>
            <hr className="news-divider" />
          </div>
        ))}
      </div>
    );
  }
  
  
}

export default BusinessFetcher;