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
    }, []);//?hardoim [] beligisi bolishi kerak. Chunki bu qoyilmasa useEffect loop tarzida ishlab toxtovsiz db dan malumot req qilib olib keladi
           //?[] bosh yoki qiymatga ega holda keladi. qiymatberilishi yoki ozgarishiga qarab, qiymat yangilanganda useEffekt birmarta ishlaydi va toxtaydi
  
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
