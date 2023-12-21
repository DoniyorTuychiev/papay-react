import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
// import { TopRestaurants } from './topRestaurants';
import { TopRestaurants } from "./toprestaurants";

import { BestRestaurants } from "./bestrestaurants";
import { BestDishes } from "./bestdishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../app/css/home.css";

export function HomePage() {
   //(2-bosqich) selector: store => datani olib beradi

    useEffect(() =>{
      //backenddan data request => data => data kelsa 1-bosqich: redux Store ga datani slice orqali yozadi(yozilish processi=> Slice, va uni ichida reducerlar boladi)

      //(1-bosqich) slice: data => store
    }, []);
    
    return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}

export default HomePage;
