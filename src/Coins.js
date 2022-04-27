import React from 'react'
import { Link } from 'react-router-dom';
import CoinRoute from './Route/CoinRoute.js';
import Coin from './Coin.js';

const Coins = ({filteredCoins}) => {
    return (
        <div>
            {filteredCoins.map(coin => {
                return (
                    <Link to={`/coin/${coin.id}`} element = {<CoinRoute/>} key = {coin.id}>
                        <Coin
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    </Link>
        );
        })}
        </div>
    )
}

export default Coins