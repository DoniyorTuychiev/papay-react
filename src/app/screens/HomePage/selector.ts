import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage; //AppRooteStatedagi homePage malumoti bor shuni olib ber degani
export const retrieveTopRestaurants = createSelector(//createSelector orqali toprestaurantlarni olib berish mantigi hosil qildik
  selectHomePage,
  (HomePage) => HomePage.topRestaurants //homePage ichidan topRestaurantsni oldik va uni datasini =>retrieveTopRestaurants ga joyladik
);
export const retrieveBestRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestRestaurants
);
export const retrieveTrendProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);
export const retrieveBestBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestBoArticles
);
export const retrieveTrendBoarticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendBoArticles
);
export const retrieveNewBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newBoArticles
);
