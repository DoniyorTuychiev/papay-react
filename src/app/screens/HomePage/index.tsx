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
import { setTopRestaurants, bestRestaurants } from "./slice";
import { retrieveTopRestaurants, retrieveBestRestaurants } from "./selector";
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

const bestRestaurantRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);

export function HomePage() {
  /** INITIALIZATION   */
  const {setTopRestaurants} = actionDispatch(useDispatch());

  //(2-bosqich) selector: store => datani olib beradi
const {topRestaurants} = useSelector(topRestaurantRetriever);//bu console.log qilishga yordam beradi
const {bestRestaurants} = useSelector(bestRestaurantRetriever);//?2-bosqich qabul qilindi

console.log("topRestaurants:::", topRestaurants,bestRestaurants); //?3-bosqich ishlatildi
console.log("bestRestaurants:::", bestRestaurants);

  useEffect(() => {
    //backenddan data request => data => data kelsa 1-bosqich: redux Store ga datani slice orqali yozadi(yozilish processi=> Slice, va uni ichida reducerlar boladi)
    //(1-bosqich) slice: data => store
    const data: Restaurant[] = [ //buyerdat ixtiyoriy argument past qilinmasligi kerak. shuning uchun biz qabulqilishi mumkin bolgan argument type ni => Restaurant[] deb past qildik
      {
        _id: "656c391e5a4ae14b4cde1a9f",
        mb_nick: "Pizzeria",
        mb_phone: "+14855234952",
        mb_password:
          "$2a$10$9mAU12rQGPnxf/PrVNJxDez9dKDqB1/s8Yc9MDYeiVzQLdfgJVjri",
        mb_type: "RESTAURANT",
        mb_status: "ACTIVE",
        mb_point: "2",
        mb_top: "Y",
        mb_views: 2,
        mb_likes: 0,
        mb_follow_cnt: 0,
        mb_subscriber_cnt: 0,
        me_liked:[ //me_liked: [] orniga katta bilan olsam qabul qildi  nimaga Savol
        {
          mb_id: "65687053c497e523fba6d4b4",
          like_ref_id: "656c391e5a4ae14b4cde1a9f",
          my_favorite: true,
        }
        ],
      },
      // {
      //   _id: "656c32c25a4ae14b4cde1a75",
      //   mb_nick: "BasriBaba",
      //   mb_phone: "165656595",
      //   mb_password:
      //     "$2a$10$oQ5D7b/DJ3Sn7OXXaymt/edGt2PTmjjP5AUGnQhqES5oC6xbGWJ/e",
      //   mb_type: "RESTAURANT",
      //   mb_status: "ACTIVE",
      //   mb_point: "1",
      //   mb_top: "Y",
      //   mb_views: 3,
      //   mb_likes: 1,
      //   mb_follow_cnt: 0,
      //   mb_subscriber_cnt: 0,
      //   createdAt: "2023-12-03T07:48:18.509Z",
      //   updatedAt: "2023-12-18T21:46:37.183Z",
      //   __v: 0,
      //   me_liked: [],
      // },
      // {
      //   _id: "656d0ffcc326ecbab1fcccff",
      //   mb_nick: "TastyFood",
      //   mb_phone: "+63892589246",
      //   mb_password:
      //     "$2a$10$oAhCCeOAr2VDuzM9izvofuFg6zyMBQFBTlKeeU3NI..t9LKpSyjpm",
      //   mb_type: "RESTAURANT",
      //   mb_status: "ACTIVE",
      //   mb_point: "0",
      //   mb_top: "Y",
      //   mb_views: 1,
      //   mb_likes: 0,
      //   mb_follow_cnt: 0,
      //   mb_subscriber_cnt: 0,
      //   createdAt: "2023-12-03T23:32:12.249Z",
      //   updatedAt: "2023-12-16T02:01:29.142Z",
      //   __v: 0,
      //   me_liked: [],
      // },
      // {
      //   _id: "656c3caf5a4ae14b4cde1ac5",
      //   mb_nick: "Istanbulsky",
      //   mb_phone: "+79526326262",
      //   mb_password:
      //     "$2a$10$0Sp4FCq2TjgEMAFSR6i6Bu6ZAqfyw2XEQH8qb6LsvVMe9v1Qr2J56",
      //   mb_type: "RESTAURANT",
      //   mb_status: "ACTIVE",
      //   mb_point: "0",
      //   mb_top: "Y",
      //   mb_views: 1,
      //   mb_likes: 0,
      //   mb_follow_cnt: 0,
      //   mb_subscriber_cnt: 0,
      //   createdAt: "2023-12-03T08:30:39.482Z",
      //   updatedAt: "2023-12-06T18:38:11.344Z",
      //   __v: 0,
      //   me_liked: [],
      // },
    ];
    setTopRestaurants(data);
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
