import React from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/dashboard/Tabs";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/dashboard/Search";
import PaginationComponent from "../components/dashboard/PaginationComponent";
import Loader from "../components/common/Loader";
import BackToTop from "../components/common/BackToTop";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().trim().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().trim().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        setPaginatedCoins(res.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error", e);
        setIsLoading(false);
      }, []);
  });

  return (
    <>
    <Header />
    <BackToTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="dashboardPage">
          
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />

          {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
