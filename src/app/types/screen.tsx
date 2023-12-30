import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

export interface AppRootState {
  //centralni interface (butun projectni qolipi)
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
}
/** HOME PAGE */
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticles: BoArticle[];
  newBoArticles: BoArticle[];
}
/** RESTAURAND PAGE */
export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  rendomRestaurants: Restaurant[];
  chosenRestaurants: Restaurant | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}
