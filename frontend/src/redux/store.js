import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer/userReducer';

console.log("USERREDUCER ", userReducer)

export const store = configureStore({
  reducer : {
    userInfos: userReducer
  }
})