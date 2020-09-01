import React from 'react';
import './Nav.css';
import requests from './requests';

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTopheadlines)}>Global Top Headlines</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopBBC)}>BBC News</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopIndian)}>Top Indian Headlines</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchBusiness)}>Business</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchEntertainment)}>Entertainment</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchScience)}>Science</h2>
            <h2  onClick={() => setSelectedOption(requests.fetchTech)}>Technology</h2>
           
            <h2  onClick={() => setSelectedOption(requests.fetchHealth)}>Health</h2>
           
           
        </div>
    )
}

export default Nav
