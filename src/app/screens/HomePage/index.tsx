import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./toprestaurants";
import { BestRestaurants } from "./bestrestaurants";
import { BestDishes } from "./bestdishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendation";
import "../../../css/home.css";

// REDUX
import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setTopRestaurants,
  setBestRestaurants,
} from "../../screens/HomePage/slice";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) => dispach(setBestRestaurants(data)),
});

export function HomePage() {
  // INITIALIZATION
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    // backendan datani request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantService
      .getRestaurants({
        page: 1,
        limit: 4,
        order: "mb_point",
      })
      .then((data) => {
        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));
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
