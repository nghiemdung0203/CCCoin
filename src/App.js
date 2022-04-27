import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './App.css';
import NewsApi from './NewsApi';
import Coins from './Coins';
import {Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import CoinRoute from './Route/CoinRoute.js';

class Menu extends Component {
  render() {
    return (
      <Link to = '/'>
        <div>
          <h1> 
          <button> Menu </button>
          </h1>
        </div>
      </Link>
    );
  }
}

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=7d')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);


  

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (


    
    <div className='coin-app'>
      <Menu></Menu>
      <div className='coin-search'>
        <h1 className='coin-text'>SEARCH A CURRENCY</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div className = 'newsApi'>
        <NewsApi/>
      </div>
      <div className='coin-container-route'>
        <Routes>
          <Route path='/' element={<Coins filteredCoins={filteredCoins} />} />
          <Route path = '/coin' element={<CoinRoute/>}>
            <Route path = ':coinId' element={<CoinRoute />}/>
          </Route>
        </Routes>
      </div>
  
    </div>
  );
}

export default App;
