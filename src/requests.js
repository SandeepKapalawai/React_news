

const API_KEY = 'd2a2c56d49e448ac80ebcd6cfc80b3ee';

export default{
    fetchTopheadlines :`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    fetchTopBBC :`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`,
    fetchTopIndian :`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`,
    fetchBusiness :`https://newsapi.org/v2/top-headlines?category=business&apiKey=${API_KEY}`,
    fetchEntertainment :`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${API_KEY}`,
    fetchScience :`https://newsapi.org/v2/top-headlines?category=science&apiKey=${API_KEY}`,
    fetchTech :`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${API_KEY}`,
    fetchHealth :`https://newsapi.org/v2/top-headlines?category=health&apiKey=${API_KEY}`,
   
}