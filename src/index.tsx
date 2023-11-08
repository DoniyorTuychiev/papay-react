import React from 'react';
import { createRoot } from 'react-dom/client';//React dom packege Vertual dom uchun ishlaydi
import { Provider } from 'react-redux';      //real dom bu brauzerda html, head, boddy joylashadi
import { store } from './app/store';         //Vertual dom birinchi quriladi va osha asosida real dom uzgartiriladi
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

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
