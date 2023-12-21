import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";

const initialState: HomePageState = {
  //initialState = bolsin HomePageStatega
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoArticles: [],
  trendBoArticles: [],
  newBoArticles: [],
};

const HomePageSlice = createSlice({ //Slice bizni barcha action cratersni ozida saqladi
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    bestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    trendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    trendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    newBoArticles: (state, action) => {
      state.newBoArticles = action.payload;
    },
  },
});

//reduce da ishlatish uchun quydagicha:
export const { 
  setTopRestaurants,
  bestRestaurants,
  trendProducts,
  bestBoArticles,
  trendBoArticles,
  newBoArticles,
} = HomePageSlice.actions;

//reduce ga ulash uchun quydagicha:
const  HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
