import {Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react';
import './css/App.css';
import { RippleBadge } from './MaterialTheme/styled';
import Users from "./components/users"
import Dishes from "./components/dishes"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { MemberPage } from './screens/MemberPage';
import { OrdersPage } from './screens/OrdersPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/restaurant">Restaurant</Link>
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/member-page">MemberPage</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">HomePage</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  );
}
/* <RippleBadge badgeContent = {4}></RippleBadge> Bu bizga tolqilanib turuvchi tugmachani hosil qilib beradi.
 <Button color = "secondary" yoki Bydefault holatda index.ts dagi primry ga kiritilgan rangda boladi biz
  uni secondary orqali ozgartirishimiz mumkin */
export default App;

function Home() {
  return <h2>Home</h2>;
}
// Reactda Functional component va Class componentlar bor. Hook tizimi rivojlanib 
//(oldin Classdagina bolgan state endi shartli ravishda Functional componentdaham ishlay boshladi ) ketkani sabab Class componentlar unchalik ishladilmayapti
//component based usulida <Users/> va <Dishes/> componentlarini rendir qilinyapti
//REactda componentlar App.tsx ichidayam bolishi mumkin aloxida tashqi folder ichida ochilib chaqirilishiyam mumkin


