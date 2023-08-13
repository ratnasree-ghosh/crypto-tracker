import * as React from 'react';
import {useState} from "react";
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Button from "../Button";


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  

  

  return (
    <div>
     
          <IconButton  onClick={()=> setOpen(true)}>{<MenuRoundedIcon className='link'/>}</IconButton>
          <Drawer
            anchor={"right"} //which side to open the drawer, Ex- top,bottom,left,right
            open={open} //status og drawer false or true
            onClose={()=> setOpen(false)}
          >
            <div className="drawer-links">
            <a href="/">
                <p className="link">Home</p>
            </a>

            <a href="/compare">
                <p className="link">Compare</p>
            </a>

            <a href="/watchlist">
                <p className="link">Watchlist</p>
            </a>

            {/* <a href="/dashboard">
                <p className="link">Dashboard</p>
            </a> */}

            <a href="/dashboard">
                <Button text={"Dashboard"} />
            </a>

            </div>

          </Drawer>
        
      
    </div>
  );
}