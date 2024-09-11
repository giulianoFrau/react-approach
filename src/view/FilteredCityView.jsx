import { useEffect, useMemo, useState } from "react";
import AppMenu from "../components/AppMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, deleteCity } from "../stores/allCitiesSlice";
import CityCard from "../components/CityCard.jsx";
import { Link } from "react-router-dom";
import FilterRadio from "../components/FilterRadio.jsx";

function FilteredCityView() {
  const [continentName, setContinentName] = useState("all");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.allCities.allCities);
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  function deleteCurrentCity(cityName) {
    dispatch(deleteCity(cityName));
  }

  const filteredCities = useMemo(() => {
    if (continentName === "all") {
      return cities;
    } else {
      return cities.filter((city) => city.region === continentName);
    }
  }, [cities, continentName]);

  return (
    <>
      <AppMenu />
      <div>
        <h1>List of Countries from store</h1>
        <Link to="/">
          {" "}
          <u>Torna alla home </u>
        </Link>
        <FilterRadio
          continentName={continentName}
          setContinentName={setContinentName}
        />

        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {filteredCities.map((city, index) => (
            <CityCard
              key={index}
              cityName={city.name.common}
              deleteCity={deleteCurrentCity}
              region={city.region}
              isPreferenceVisible={false}
            ></CityCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilteredCityView;
