import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import  convertNumber  from "../../../functions/convertNumber";

const List = ({ coin }) => {
  return (
    <tr className="list-row ">
      <Tooltip title="Coin Image" placement="bottom-start">
        <td className="table-img">
          <img src={coin.image} alt={coin.name} className="coin-logo" />
        </td>
      </Tooltip>

      <Tooltip title="Coin Info" placement="bottom-start">
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>

      <Tooltip title="Coin price change in 24h" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip red-price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip red-icon-chip td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>

      <Tooltip title="Current price" placement="bottom">
        <td>
          <h3
            className="coin-current-price td-center-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>

      <Tooltip title="Total Volume" >
        <td>
          <p className="total-volume td-right-price td-total-vol">
            ${coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>

      <Tooltip title="Total Market Cap">
        <td className="destop-td-cap">
          <p className="market-cap td-right-price">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>

      <Tooltip title="Total Market Cap">
        <td className="mobile-td-cap">
          <p className="market-cap td-right-price">
            ${convertNumber(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
};

export default List;
