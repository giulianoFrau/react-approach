import { useEffect, useState } from "react";
import "../components/AppCities.scss";
import { Cities } from "../api/index.js";
import { InputText } from "primereact/inputtext";

const AppCites = () => {
  const [AllCities, setAllCities] = useState([]); //ref dove salvo result api città

  const [cityName, setCityName] = useState(""); //ref per input

  const [filteredCities, setFilteredCities] = useState([]); //ref dove salvo i risultati filtrati

  async function getCities() {
    const resp = await Cities.getCities();
    setAllCities(
      resp.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    );
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
