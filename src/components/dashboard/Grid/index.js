import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

const Grid = ({coin})=>{
    return (


        <div className="grid-container">
            <div className="info-flex">
                <img src={coin.image} alt={coin.name} className="coin-logo"/>

                <div className="name-col">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
            </div>

            {coin.price_change_percentage_24h>0? (<div className="chip-flex">
                <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            </div>) : (<div className="chip-flex">
                <div className="price-chip red-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            </div>) 
            }
            

        </div>
    )
}

export default Grid;