import {axios} from './axios.js'


export default {
    getCities(data) {
        const objectInJson= JSON.stringify(data);
        return axios.get('https://restcountries.com/v3.1/all',objectInJson)
    }
}