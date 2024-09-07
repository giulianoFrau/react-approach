import React, { useEffect, useState } from "react";
import "../components/AppCities.scss";
import { Cities } from "../api/index.js";
const AppCites = () => {

  const [AllCities, setAllCities] = useState([]); //ref dove salvo result api città

  const [cityName, setCityName] = useState(""); //ref per input

  const [filteredCities, setFilteredCities] = useState([]);  //ref dove salvo i risultati filtrati


  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setCityName(lowerCase);
  };


  async function getCities() {
    const resp = await Cities.getCities();
    setAllCities(resp.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1)));
  }

  useEffect(() => {
    getCities();
  }, []);

  useEffect(() => {
    const filtered = AllCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [AllCities, cityName]);

  return (
    <>
    <div className="app__cities__container">

    </div>
      <input
        type="text"
        onChange={inputHandler} 
        value={cityName}
      />
      <ul>
        { filteredCities.length >0 ?
        filteredCities.map((item, index) => (
          <li key={index} className="text">{item.name.common}</li>
        )) : <li>Nessun Risultato</li>}

       
      </ul>
      
    </>
  );
};

export default AppCites;
