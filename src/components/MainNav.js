import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles'
import { useEffect } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';


 const useStyles = makeStyles({
    root:{
      width: "100%",
      position: "fixed",
      bottom: 0,
        zIndex: 100,
    },
})

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const navigate =useNavigate()
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if(value===0) navigate("/");
    else if(value===1) navigate("/movies");
    else if(value===2) navigate("/series");
    else if(value===3) navigate("/search");
  }, [value , navigate])

  return (
   
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        style={{backgroundColor: "#282c34"}}
        className={classes.root}
      >
        <BottomNavigationAction style={{color: "white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: "white"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
   
  );
}