import { createSlice } from "@reduxjs/toolkit";

// Carica lo stato dal sessionStorage, se esiste
const savedState = JSON.parse(sessionStorage.getItem("citiesState")) || {
  preferCities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState: savedState,
  reducers: {
    addToPreferences: (state, action) => {
      state.preferCities.push(action.payload);
      sessionStorage.setItem("citiesState", JSON.stringify(state));
    },
    removeToPreferences: (state, action) => {
      state.preferCities = state.preferCities.filter(
        (city) => city !== action.payload
      );
      sessionStorage.setItem("citiesState", JSON.stringify(state));
    },
  },
});

export const { addToPreferences, removeToPreferences } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;
