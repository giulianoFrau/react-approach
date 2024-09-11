import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesSlice";
import { allCitiesReducer } from "./allCitiesSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    allCities: allCitiesReducer,
  },
});
