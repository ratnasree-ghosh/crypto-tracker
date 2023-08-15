import React from "react";
import Header from "../components/common/Header";
import TabsComponent from "../components/dashboard/Tabs";
import {useState, useEffect} from "react";
import axios from "axios";

 const DashboardPage = ()=>{

    const [coins,setCoins] = useState([]);

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((res)=> {
            setCoins(res.data);
            
        })
        .catch(e =>{
            console.log("Error", e);
        }, []);
    })
    

    return <div className="dashboardPage"> 
        <Header/>
       < TabsComponent coins={coins}/>
      
    </div>
}

export default DashboardPage; 