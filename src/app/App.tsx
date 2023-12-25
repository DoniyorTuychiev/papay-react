import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import "./css/App.css";
import "./css/navbar.css";
import "./css/footer.css";
import { RippleBadge } from "./MaterialTheme/styled";
//Bu ayni vaqtda hech qayerda ishlamayapti
//Bu ayni vaqtda hech qayerda ishlamayapti
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
    </Router>
  );
}

export default App;

//?Reactni 2 xil usulda qurish mumkin 1-Plain HS template + Redux. 2-TypeScript template + Redux
//typScript bu javaScriptda qurilgan.super set of JS. typscrip da loyixa yozilsada compiling bolishda typscripCompilling orqali tolliq JS ga ogiriladi
//TS JSni tolliq sintacsislarini ozichiga oladi undan tashqari ozini sintacsislariga ham ega
//nega TS: eng muhim tomonlaridan biri JS ga type tushunchasini olib kirganligiddir
//TS development envirementda run bolsada loyihani productinon qilganimizda toliq JS ga ogirilip chiqadi.
//toridan tori JS ga ogirilmasligini sababi build qilishga vaqt koproq ketkanidadir
//Build qilib bolgach productionni run qilish uchun 'serve' external pakage kerak
//?TypeScript Types, Type Annotations, Type Interface, Number Types ...
//Type Interface faqat typelar uchun object uchun emas hizmat qiladi.
//JS va TS ni katta farqi uni Typelarida => JS da let num = 9.55; let ism = "John"; => TS da let num: number = 9.55; let ism: string = "John";

//?REDUX ishlashi: View => (dispach orqali boradi)Action => Reduce => Store =>(orqali subscribe keladi) View ga qaytib uchatildi. Redux react dan tashqari boshqa frameWorklada ishlatilishi mumkin masalan: Angular,ViewJS, ....
//MVS dan farqi debuging qilish oson aynan singleStore bolgani uchun. hamma business logiclar serviseModule da emas Reduce da bajariladi. Redux MVC dan bosh aloxida front-endda ham ishlatilishi mumkin
//Redux ni qollashni 2 xil usuli bor:
//1-traditional usul orqali reduxni qurish.yani kop keraksiz bolmagan kodlar orqali ananaviy usulda reduxni ishlatish.
//2-usull Zamonaviy Usul yani ReduxToolkit. Bu usul ancha tushunish uchun sodda, kuchli, qisqa kode bilan yuqori natijali usul hisoblanadi. Biz Papay loyihamizda shu usuldan foydalanamiz

//serve pakege i va birxil IPadressda bir nechta devicelar projectni run qilishi; TypeScript va Redux architecture haqida Nazariy (REACT) by_90
