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
      state.topRestaurants = action.payload;//state.bestRestaurants bolip qogani uchun 2 kun err qidirdim
    },
    setBestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
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
export const { 
  setTopRestaurants,
  setBestRestaurants,
  setTrendProducts,
  setBestBoArticles,
  setTrendBoArticles,
  setNewBoArticles,
} = HomePageSlice.actions;

//reduce ga ulash uchun quydagicha:
const  HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
