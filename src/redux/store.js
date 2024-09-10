import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesSlice";
import { counterReducer } from "./counterSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    counter: counterReducer,
  },
});
