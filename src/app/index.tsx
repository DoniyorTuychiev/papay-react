import React from 'react';
import { createRoot } from 'react-dom/client';           //React dom packege Vertual dom uchun ishlaydi
import { Provider } from 'react-redux';                 //real dom bu brauzerda html, head, boddy joylashadi
import { store } from './store';                   //Vertual dom birinchi quriladi va osha asosida real dom uzgartiriladi
import App from './App';                              //libary bu malum bir amallarni bajarish uchun ysrstilgsn kutubxona. <=> FrameWork esa proectda hartomonlama amallarni bajaradi
import reportWebVitals from '../reportWebVitals';     //React da rooting tizimi yoqligi sabab aloxida install kerak. Lekin React ni frameWorklari mavjud.Ex: NextJS
import './index.css';                               //React APP lar uchun ishlatilganda ReactNativeLibarysi dan foydalaniladi

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
