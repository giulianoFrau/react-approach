import { useEffect, useState,useMemo } from "react";
import "../components/AppCities.scss";
import { Cities } from "../api/index.js";
import { InputText } from "primereact/inputtext";

const AppCites = () => {
  const [AllCities, setAllCities] = useState([]); //ref dove salvo result api città

  const [cityName, setCityName] = useState(""); //ref per input

 

  async function getCities() {
    const resp = await Cities.getCities();
    setAllCities(
      resp.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    );
  }

  useEffect(() => {
    getCities();
  }, []);

  const filteredCities = useMemo(() => {
    return  AllCities.filter((city) =>
      city.name.common.toLowerCase().includes(cityName.toLowerCase())
    );
  }) 

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
      <div className="app__cities flex flex-col gap-7">
        <InputText
          className="border text-indigo-500 p-2"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        ></InputText>

        <div className="app__cities__container flex flex-wrap gap-5 justify-center">
          {filteredCities.length > 0
            ? filteredCities.map((item, index) => (
                <div
                  key={index}
                  className="app__cities__container-card p-3 border rounded-md"
                >
                  <div>{item.name.common}</div>
                </div>
              ))
            : "Nessun Risultato"}
        </div>
      </div>
    </>
  );
};

export default AppCites;
