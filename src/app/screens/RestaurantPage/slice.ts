import { Restaurant } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { RestaurantPageState } from "../../types/screen";

const initialState: RestaurantPageState = {
  targetRestaurants: [],
  rendomRestaurants: [],
  chosenRestaurants: null,
  targetProducts: [],
  chosenProduct: null,
};

const restaurantPageSlice = createSlice({
  name: "restaurantPage",
  initialState,
  reducers: {
    setTargetRestaurants: (state, action) => {
      state.targetRestaurants = action.payload;
    },
    setRandomRestaurants: (state, action) => {
      state.rendomRestaurants = action.payload;
    },
    setchosenRestaurants: (state, action) => {
      state.chosenRestaurants = action.payload;
    },
    setTargetProducts: (state, action) => {
      state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
  },
});

export const {
  setTargetRestaurants,
  setRandomRestaurants,
  setchosenRestaurants,
  setTargetProducts,
  setChosenProduct
}= restaurantPageSlice.actions;
const RestaurantPageReducer= restaurantPageSlice.reducer;
export default RestaurantPageReducer;
