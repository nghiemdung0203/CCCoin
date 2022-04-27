import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HistoryCoin from "./HistoryCoin";

const CoinRoute = () => {
    const params = useParams();
    const [coin, setCoin] = useState({});
    const [coinDay, setCoinDay] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    const formatData = (data) => {
        return data.map(item => {
            return {
                t: item[0],
                y: item[1].toFixed(2),
            }
        })
    }

    useEffect(() => {
        axios.get(url).then(res => {
            setCoin(res.data);
        }).catch(error => console.log(error));
    })

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=1`)
            .then(res => {
                if (res.data.prices) {
                    setCoinDay(res.data.prices);
                }
        }).catch(err => {
            console.log(err);
        })
        console.log(coinDay);
    },[]);   


    return (
        <div className = 'Coin-route'>
            <div className='coin-container'>
                <div className = 'coin-left'>
                    {coin.image ? <img src = {coin.image.small} alt = 'coin' class/> : null}
                    <h2>{coin.name}</h2>
                    <p className = 'symbol'>{coin.symbol}</p>
                    <span className ='rank'>Rank # {coin.market_cap_rank}</span>
                </div>
                <div className = 'coin-right'>
                    <p>{coin.name} Price ({coin.symbol})</p>    
                    {coin.market_data ? <h2> ${coin.market_data.current_price.usd}</h2> : null}
                    {coin.market_data ? <p id='Low'>Low: ${coin.market_data.low_24h.usd}</p> : null}
                    {coin.market_data ? <p id='High'>High: ${coin.market_data.high_24h.usd}</p> : null}
                    <div className='coin-below-right'>
                        {coin.market_data ? <p>Market Cap ${coin.market_data.market_cap.usd}</p> : null}
                        {coin.market_data ? <p>Fully Dilluted Market Cap ${coin.market_data.fully_diluted_valuation.usd}</p> : null}
                        {coin.market_data ? <p>Volume ${coin.market_data.fully_diluted_valuation.usd}</p> : null}
                        {coin.market_data ? <p>Circulating Supply ${coin.market_data.circulating_supply} {coin.symbol.toUpperCase()}</p> : null}
                    </div>
                </div>
            </div>
            <div className ='coin-table'>
                <HistoryCoin Dataa = {coinDay}/>
            </div>

        </div>
        );
}

export default CoinRoute;