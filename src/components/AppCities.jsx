import { useEffect, useState, useMemo } from "react";
import "../components/AppCities.scss";
import { Cities } from "../api/index.js";
import CityForm from "./CityForm.jsx";
import CityCard from "./CityCard.jsx";
import CitySearch from "./CitySearch.jsx";

const AppCites = () => {
  const [AllCities, setAllCities] = useState([]); //ref dove salvo result api città

  const [cityName, setCityName] = useState(""); //ref per input

  async function getCities() {
    const resp = await Cities.getCities();
    setAllCities(
      resp.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    );
  }

  function addCity(city) {
    setAllCities(
      [...AllCities, city].sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      )
    );
  }

  const filteredCities = useMemo(() => {
    return AllCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
  }, [AllCities, cityName]);

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
    const filtered = AllCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [AllCities, cityName]);

  */

  return (
    <>
      <div className="flex gap-10 flex-wrap">
        <CitySearch
          cityName={cityName}
          setCityName={setCityName}
          totalResult={filteredCities.length}
        />
        <div className="hidden md:block md:border"></div>

        <CityForm addCity={addCity}></CityForm>
      </div>

      <div className="app__cities flex flex-col gap-7 mt-7">
        <div className="app__cities__container flex flex-wrap gap-5 justify-center">
          {filteredCities.length > 0
            ? filteredCities.map((item, index) => (
                <CityCard key={index} cityName={item.name.common}></CityCard>
              ))
            : "Nessun Risultato"}
        </div>
      </div>
    </>
  );
};

export default AppCites;
