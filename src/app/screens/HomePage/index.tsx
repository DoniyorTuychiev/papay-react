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

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "./slice";
import { retrieveTopRestaurants} from "./selector";
import { Restaurant } from "../../types/user";

/****************************
 *      REDUX SLICE         *
 ****************************/
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
});

/****************************
 *      REDUX Selector      *
 ****************************/
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({ //?1-bosqich selectorda past bolyapti
    topRestaurants,
  })
);

export function HomePage() {
  /** INITIALIZATION   */
  const {setTopRestaurants} = actionDispatch(useDispatch());

  //(2-bosqich) selector: store => datani olib beradi
const {topRestaurants} = useSelector(topRestaurantRetriever);//bu console.log qilishga yordam beradi//?2-bosqich qabul qilindi

console.log("topRestaurants:::", topRestaurants); //?3-bosqich ishlatildi


  useEffect(() => {
    //backenddan data request => data => data kelsa 1-bosqich: redux Store ga datani slice orqali yozadi(yozilish processi=> Slice, va uni ichida reducerlar boladi)
    
    setTopRestaurants([]);
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
