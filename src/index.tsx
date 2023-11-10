import React from 'react';
import { createRoot } from 'react-dom/client';           //React dom packege Vertual dom uchun ishlaydi
import { Provider } from 'react-redux';                 //real dom bu brauzerda html, head, boddy joylashadi
import { store } from './app/store';                   //Vertual dom birinchi quriladi va osha asosida real dom uzgartiriladi
import App from './app/App';                          //libary bu malum bir amallarni bajarish uchun ysrstilgsn kutubxona. <=> FrameWork esa proectda hartomonlama amallarni bajaradi
import reportWebVitals from './reportWebVitals';     //React da rooting tizimi yoqligi sabab aloxida install kerak. Lekin React ni frameWorklari mavjud.Ex: NextJS
import './app/css/index.css';                       //React APP lar uchun ishlatilganda ReactNativeLibarysi dan foydalanilad

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './app/MaterialTheme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//screen lrni hosil qilishni 2 xil yoli bor , birinchi yolida screenni ichida MemberPage.tsx qilib ochilishi mumkin va vu faylnomi bilan yozilishi shart 
// /2- yoli MemberPage nomli foldir ochi unichiga index.tsx ni yozish mumkin va unga tegishli narsalarni ham shu yerga yozsa boladi 
// Agar 1-usuldan foydalanilsa component elementlarini component folderi ichiga yozish shart va shuning uchun biz ikkinchi usuldan foydalanamiz

reportWebVitals();
