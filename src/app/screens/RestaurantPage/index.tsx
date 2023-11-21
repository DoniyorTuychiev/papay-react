import React from 'react';
import { Container } from "@mui/material";
import { Switch, useRouteMatch, Route} from 'react-router-dom';
import { ChoosenDish } from './choosenDish';
import { OneRestaurant } from './oneRestaurant';
import { AllRestaurants } from './allRestaurants';

export function RestaurantPage() {
    let restaurant = useRouteMatch();
    console.log(restaurant);
    return (
        <div className = 'restaurant_page'>
            <Switch>
                <Route path = {`${restaurant.path}/dish/:dish_id`}>
                    <ChoosenDish/>
                    </Route>
                <Route path = {`${restaurant.path}/:restaurant_id`}>
                    <OneRestaurant/>
                    </Route>
                <Route path = {`${restaurant.path}`}>
                    <AllRestaurants/>
                    </Route>
            </Switch>
        </div>
    );
}

export default RestaurantPage;