import {Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import './css/App.css';
import './css/navbar.css';
import './css/footer.css';
import { RippleBadge } from './MaterialTheme/styled';
 //Bu ayni vaqtda hech qayerda ishlamayapti
 //Bu ayni vaqtda hech qayerda ishlamayapti
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { MemberPage } from './screens/MemberPage';
import { OrdersPage } from './screens/OrdersPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarOthers } from './components/header/others';
import { NavbarHome } from './components/header';
import { Footer } from './components/footer';

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname; //qaysi headerni qachon ishlatish kerekligini path orqali tashkillab olinadi
  
  console.log("main_path=>", main_path); //orders ni ichida turib obnavleniya qilsak  main_path=. LoginPagedeb korsatadi
  
    return (
    <Router >
        {main_path == "/" ? (
          <NavbarHome setPath={setPath}/>
          ) : main_path.includes('/restaurant') ? (
            <NavbarRestaurant setPath={setPath}/>
          ) : (
            <NavbarOthers />
          )}
        <Switch>
          <Route path="/restaurant">
            <RestaurantPage/>
          </Route>
          <Route path="/community"> 
            <CommunityPage />
          </Route>
          <Route path="/member-page"> 
            <MemberPage />
          </Route>
          <Route path="/orders"> 
            <OrdersPage />
          </Route>
          <Route path="/help"> 
            <HelpPage />
          </Route>
          <Route path="/login"> 
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

/* <RippleBadge badgeContent = {4}></RippleBadge> Bu bizga tolqilanib turuvchi tugmachani hosil qilib beradi.
 <Button color = "secondary" yoki Bydefault holatda index.ts dagi primry ga kiritilgan rangda boladi biz
  uni secondary orqali ozgartirishimiz mumkin */

export default App;



// Reactda Functional component va Class componentlar bor. Hook tizimi rivojlanib 
//(oldin Classdagina bolgan state endi shartli ravishda Functional componentdaham ishlay boshladi ) ketkani sabab Class componentlar unchalik ishladilmayapti
//component based usulida <Users/> va <Dishes/> componentlarini rendir qilinyapti
//REactda componentlar App.tsx ichidayam bolishi mumkin aloxida tashqi folder ichida ochilib chaqirilishiyam mumkin


