import React from 'react'
import './newapi.css';

const BorderNews = ({Date, title, urll, description}) => {
    return (
        <div className='newsBlock'>
            <p className='date'>{Date}</p>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <a href={urll}>{urll}</a>
        </div>
    )
}

export default BorderNews