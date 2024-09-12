import { useEffect, useState, useMemo } from "react";
import "../assets/style/AppCities.scss";
import { Cities } from "../api/index.js";
import CityForm from "./CityForm.jsx";
import CityCard from "./CityCard.jsx";
import CitySearch from "./CitySearch.jsx";
import { Paginator } from 'primereact/paginator';

const AppCites = () => {
  const [allCities, setAllCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(12); 

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

  const indexOfLastCity = currentPage * rowsPerPage;
  const indexOfFirstCity = indexOfLastCity - rowsPerPage;
  const allFilteredCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);

  const handlePageChange = (event) => {
    setCurrentPage(event.page + 1); 
  };

  useEffect(() => {
    getCities();
  }, []);

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

        <CityForm addCity={addCity} />
      </div>

      <div className="flex flex-col mt-7 md:gap-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {allFilteredCities.length > 0 ? (
            allFilteredCities.map((item, index) => (
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
        <div className="paginator mt-auto">
        <Paginator
          first={indexOfFirstCity}
          rows={rowsPerPage}
          totalRecords={filteredCities.length}
          onPageChange={handlePageChange}
        />
        </div>
      </div>
    </div>
  );
};

export default AppCites;
