import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cities } from "../api";

// Action asincrona per fare la chiamata all'API
export const fetchCities = createAsyncThunk("getAllCities", async () => {
  const response = await Cities.getCities();
  return response.data;
});

export const allCitiesSlice = createSlice({
  name: "allCities",
  initialState: {
    allCities: [],
    status: "idle", // stato di default
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.allCities = action.payload;
    });
  },
});

export const allCitiesReducer = allCitiesSlice.reducer;
