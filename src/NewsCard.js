import React, { forwardRef } from 'react';
import './NewsCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpSharp from '@material-ui/icons/ThumbUp';

const NewsCard = forwardRef(({article},ref) => {
    console.log(article)
 
    return (
        <div ref={ref} className="newsCard">
            <img src={article.urlToImage } alt="News"/>
            
            <h3>{article.title || article.original_name}</h3>
         
            <TextTruncate line={2} element="p"  truncateText ="..."  text= {article.content} />
         
            {/* <p className="videoCard_stats">    {article.media_type && `${article.media_type}.`}
            {article.publishedAt }
       </p> */}
        </div>
    )
});

export default NewsCard;
