import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cities } from "../api";

// Action asincrona per fare la chiamata all'API
export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
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
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allCitiesReducer = allCitiesSlice.reducer;
