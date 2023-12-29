import React, { useEffect } from "react";
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
import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setTopRestaurants, setBestRestaurants, setTrendProducts } from "./slice";
import { Restaurant } from "../../types/user";
import RestaurantApiService from "../../apiService/restaurantApiService";
import { Product } from "../../types/product";

/****************************
 *      REDUX SLICE         *
 ****************************/
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) => dispatch(setBestRestaurants(data)),
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
});

export function HomePage() {
  /** INITIALIZATIONS */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(useDispatch());

  useEffect(() => {
    //backend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => { //await emas then ni ishlatishga sabab useEffect doim sycris usulda hosil bolish kerak. 
        //setRestaurant
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantService.getRestaurants({page: 1, limit: 4, order:'mb_point'}).then(data=>{
      setBestRestaurants(data);
    }).catch((err) => console.log(err));
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
