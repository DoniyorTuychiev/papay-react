import React from 'react';
import { Container } from "@mui/material";
import { Statistics } from './statistics';
import { TopRestaurants } from './toprestaurants';
import { BestRestaurants } from './bestrestaurants';
import { BestDishes } from './bestdishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendarions';
import '../../../app/css/home.css';


export function HomePage() {
    return <div className='homepage'>
        <Statistics/>
        <TopRestaurants/>
        <BestRestaurants/>
        <BestDishes/>
        <Advertisements/>
        <Events/>
        <Recommendations/>
    </div>
}

export default HomePage;