import { axios } from "./axios.js";

export default {
  getCities() {
    return axios.get("https://restcountries.com/v3.1/all?fields=name");
  },

  getDetails(cityName) {
    return axios.get(`https://restcountries.com/v3.1/name/${cityName}`);
  },
};
