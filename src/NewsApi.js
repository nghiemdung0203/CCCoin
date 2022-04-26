import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BorderNews from './borderNews'
import './newapi.css';

const NewsApi = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const axios = require("axios");
    const options = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
    headers: {
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
        'X-RapidAPI-Key': '07812b5f6emshb449c56dc7a3affp170298jsnf7c9cf142f6f'
    }
};

axios.request(options).then(function (response) {
    setNews(response.data);
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    }, []);
    return (
        <div className='newsApi-container'>
            {news.map(e => {
                return (
                        <BorderNews className= 'newsBlock'
                            key = {e.id}
                            Date = {e.date}
                            title={e.title}
                            description = {e.description}
                            urll = {e.url}
                        />
                )
            })}
        </div>
    )
}

export default NewsApi