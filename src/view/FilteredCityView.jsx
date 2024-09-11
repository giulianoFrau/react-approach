import { useEffect } from "react";
import AppMenu from "../components/AppMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, deleteCity } from "../stores/allCitiesSlice";
import CityCard from "../components/CityCard.jsx";

function FilteredCityView() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.allCities.allCities);
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  function deleteCurrentCity(cityName) {
    dispatch(deleteCity(cityName));
  }

  return (
    <>
      <AppMenu />
      <div>
        <h1>List of Countries from store</h1>
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {cities.map((city, index) => (
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
