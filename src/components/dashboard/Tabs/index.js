import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme ,ThemeProvider} from '@mui/material';
import Grid from "../Grid";
import "./style.css";

export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState('grid'); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
        primary: {
            main : "#3a80e9",
        },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontWeight: "600",
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "capitalize"


  };

  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
        
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
            
          </TabList>
        
        <TabPanel value="grid">
            <div className='grid-flex'>

              
              {coins.map((coin,i)=>{
                return (
                  <Grid coin = {coin}/>
                  // <div>
                  //   <img src={coin.image}  />
                  //   <p key={i}>
                  //     {i+1}. {coin.name}
                  //   </p>
                  // </div>
                )
            })}
            </div>
        </TabPanel>
        <TabPanel value="list">
            <div>mapping for list view</div>
        </TabPanel>
        
        
      </TabContext>
    </ThemeProvider>
  );
}
