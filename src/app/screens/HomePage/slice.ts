import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";

const initialState: HomePageState = {
  //initialState = bolsin HomePageStatega
  topRestaurants: [],//bular initial States
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticles: [],
  newBoArticles: [],
};

const HomePageSlice = createSlice({ //Slice bizni barcha action cratersni ozida saqladi.Slice ichida har hil reduserlar bor va initial state ham bor
  name: "homePage",                  
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {//resuserlar store ni ozgartirish uchun ishlatiladi. data esa action ichidagi peyloadlarda keladi 
      state.topRestaurants = action.payload;//masalan: topRestaurant state sini ozgartirish uchun ruduser=> action.payloadni ichidagi datani olib ozgartiradi
    },
    setBestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload; //state.bestRestaurants => bundagi state oxirgi qiymatni bildiradi yani=> bestrestaurantning oxirgi qiymatini payloddan olib yukla
    },
    setTrendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    setBestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    setTrendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    setNewBoArticles: (state, action) => {
      state.newBoArticles = action.payload;
    },
  },
});

//reduce da ishlatish uchun quydagicha:
export const { //to be reuseable any where in this project 
  setTopRestaurants,
  setBestRestaurants,
  setTrendProducts,
  setBestBoArticles,
  setTrendBoArticles,
  setNewBoArticles,
} = HomePageSlice.actions;

//reduce ga ulash uchun quydagicha:
const  HomePageReducer = HomePageSlice.reducer; //buyerda slice ni borib store ga boglash uchun export qilib oldik
export default HomePageReducer;
