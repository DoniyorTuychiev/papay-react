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

    useEffect(() =>{
        console.log("componetDidMount => Data fetch");//bu componetDidMount methodi ishlashi qismi va bu db dan malumot olib keladi.Ex: homepage da turganda

        return () => {//bu componetWillMount methodi ishlashi qismi.Ex: Jamiyatga utkanda lekin Jamiyatda useEffect ishlatilmagan shuning uchun componetWillMount boladi 
            console.log("componetWillMount process")
        };  
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
