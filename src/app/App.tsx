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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <Dishes/>
          </Route>
          <Route path="/users"> 
            <Users />
          </Route>
          <Route path="/">
            <Container>
            <Home />
            </Container>
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


