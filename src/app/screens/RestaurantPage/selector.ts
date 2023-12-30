import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";
import { stat } from "fs";
import RestaurantPage from ".";

const selectRestaurantPage = (state: AppRootState) => state.restaurantPage;

export const retrieveTargetRestaurants = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.targetRestaurants
);
export const retrieveRandomRestaurants = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.rendomRestaurants
);
export const retrieveChosenRestaurants = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.chosenRestaurants
);
export const retrieveTargetProducts = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.targetProducts
);
export const retrieveChosenProduct = createSelector(
  selectRestaurantPage,
  (RestaurantPage) => RestaurantPage.chosenProduct
);
