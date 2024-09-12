import { useEffect, useMemo, useState } from "react";
import AppMenu from "../components/AppMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, deleteCity } from "../stores/allCitiesSlice";
import CityCard from "../components/CityCard.jsx";
import FilterRadio from "../components/FilterRadio.jsx";
import CitySearch from "../components/CitySearch.jsx";
import { Paginator } from 'primereact/paginator';

function FilteredCityView() {
  const [continentName, setContinentName] = useState("all");
  const [cityNameToSearch, setCityNameToSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); 
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.allCities.allCities);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  function deleteCurrentCity(cityName) {
    dispatch(deleteCity(cityName));
  }

  const filteredCities = useMemo(() => {
    return cities.filter(
      (city) =>
        (continentName === "all" || city.region === continentName) &&
        city.name.common.toLowerCase().includes(cityNameToSearch.toLowerCase())
    );
  }, [cities, continentName, cityNameToSearch]);

  const indexOfLastCity = currentPage * rowsPerPage;
  const indexOfFirstCity = indexOfLastCity - rowsPerPage;
  const currentCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);

  const handlePageChange = (event) => {
    setCurrentPage(event.page + 1); 
  };

  return (
    <>
      <AppMenu />
      <div className="app__filter__cities">
        <h1>List of Countries from store</h1>

        <div className="flex gap-5 flew-wrap items-center flex-col md:flex-row">
          <FilterRadio
            continentName={continentName}
            setContinentName={setContinentName}
          />

          <CitySearch
            cityName={cityNameToSearch}
            setCityName={setCityNameToSearch}
            allCities={filteredCities}
            totalResult={filteredCities.length}
            isVisiblePreference={false}
          />
        </div>

        <div className={`flex flex-wrap gap-5 mt-5 ${cityNameToSearch.length === 0 ? "justify-between" : ""}`}>
          {currentCities.length > 0 ? (
            currentCities.map((city, index) => (
              <CityCard
                key={index}
                cityName={city.name.common}
                deleteCity={deleteCurrentCity}
                region={city.region}
                isPreferenceVisible={false}
              />
            ))
          ) : (
            <h1>Nessun risultato</h1>
          )}
        </div>
<div className="paginator mt-11">
<Paginator
          first={indexOfFirstCity}
          rows={rowsPerPage}
          totalRecords={filteredCities.length}
          onPageChange={handlePageChange}
        />
      </div>
</div>
        
    </>
  );
}

export default FilteredCityView;
