import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./css/App.css";
import "./css/navbar.css";
import "./css/footer.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { MemberPage } from "./screens/MemberPage";
import { OrdersPage } from "./screens/OrdersPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { NavbarHome } from "./components/header";
import { Footer } from "./components/footer";
import AuthenticationModal from "./components/auth";

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname; //qaysi headerni qachon ishlatish kerekligini path orqali tashkillab olinadi

  console.log("main_path=>", main_path); //orders ni ichida turib obnavleniya qilsak  main_path=. LoginPagedeb korsatadi

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} /> //shu yerga setPath={setPath} ni qoymaganim uchun fon rasmlari ozgarmadi
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
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
      <Footer />

      <AuthenticationModal/>
    </Router>
  );
}

export default App;

