import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice';
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>  //console.log da korinish uchun middleware qilib ishlatildi. va nomini getDefaultMiddleware deb oldik
    getDefaultMiddleware().concat(reduxLogger),
  
  reducer: { //reduxni ichida qanday malumot borligini bilish uchun redux-loger pakege kerak boladi.TSni ishlatyotkanimiz uchun @types/redux-logger pakege ham kerak aks holda err berishi mumkin
    homePage: HomePageReducer, //slice ni reduce ichiga biriktirdik
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
