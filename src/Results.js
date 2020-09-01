import React,{useState, useEffect} from 'react';
import './Results.css';
import NewsCard from './NewsCard';
import axios from './axios';
import FilpMove from 'react-flip-move';

function Results({selectedOption}) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
     async function fetchData(){
         const request = await axios.get(selectedOption);
        setArticles(request.data.articles);
        console.log(request)
         return request;
     }
     fetchData();
    }, [selectedOption])
  
    return (
        <div className="results">
          
            <FilpMove>
                
            {articles.map((article) => (
                  <NewsCard key ={article.source.publishedAt} article={article}/>
            )
                
)}
            </FilpMove>
        </div>
    )
}

export default Results;
