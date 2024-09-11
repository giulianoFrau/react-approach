import { useEffect } from "react";
import AppMenu from "../components/AppMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../stores/allCitiesSlice";

function FilteredCityView() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.allCities.allCities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);
  return (
    <>
      <AppMenu />
      <div>
        <h1>List of Countries from store</h1>
        <ul>
          {cities.map((city) => (
            <li key={city.cca3}>{city.name.common}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FilteredCityView;
