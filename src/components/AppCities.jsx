import { useEffect, useState, useMemo } from "react";
import "../assets/style/AppCities.scss"
import { Cities } from "../api/index.js";
import CityForm from "./CityForm.jsx";
import CityCard from "./CityCard.jsx";
import CitySearch from "./CitySearch.jsx";

const AppCites = () => {
  const [allCities, setAllCities] = useState([]); //ref dove salvo result api città

  const [cityName, setCityName] = useState(""); //ref per input

  async function getCities() {
    const resp = await Cities.getCities();
    setAllCities(
      resp.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    );
  }

  function addCity(city) {
    setAllCities(
      [...allCities, city].sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      )
    );
  }
  function deleteCity(city) {
    setAllCities(
      allCities.filter((currentCity) => currentCity.name.common !== city)
    );
  }

  const filteredCities = useMemo(() => {
    return allCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
  }, [allCities, cityName]);

  useEffect(() => {
    getCities();
  }, []);

  /*
   ALTERNATIVA A USEMEMO DI SU.. USEMEMO EQUIVALE A COMPUTED IN VUE.
  se volessi usare useEffect anche per vedere i cambiamenti stile watch devo fare cosi:


Aggiungi alle variabili:
const [filteredCities, setFilteredCities] = useState([]); //ref dove salvo i risultati filtrati

Aggiungi useEffect:

  useEffect(() => {
    const filtered = allCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [allCities, cityName]);

  */

  return (
    <div className="app__cities">
    <h1>List of Countries</h1>
      <div className="flex gap-10 flex-wrap mt-5">
        <CitySearch
          cityName={cityName}
          setCityName={setCityName}
          allCities={filteredCities}
          totalResult={filteredCities.length}
        />
        <div className="hidden md:block md:border"></div>

        <CityForm addCity={addCity}></CityForm>
      </div>

      <div className=" flex flex-col mt-7 md:gap-8 ">
  <div className="app__cities__container flex flex-wrap  justify-center gap-5 md:gap-8 md:justify-between">
    {filteredCities.length > 0 ? (
      filteredCities.map((item, index) => (
        <CityCard
          isPreferenceVisible={true}
          key={index}
          cityName={item.name.common}
          region={item.region}
          deleteCity={deleteCity}
        />
      ))
    ) : (
      <p className="text-gray-500 text-center w-full">Nessun Risultato</p>
    )}
  </div>
</div>

    </div>
  );
};

export default AppCites;