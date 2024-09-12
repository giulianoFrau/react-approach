import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Button } from "primereact/button";
import { addToPreferences, removeToPreferences } from "../stores/citiesSlice";
import { useDispatch, useSelector } from "react-redux";

const CityCard = ({ cityName, deleteCity, isPreferenceVisible, region }) => {
  const prefCities = useSelector((state) => state.cities.preferCities);
  const dispatch = useDispatch();

  const deleteCurrentCity = () => {
    deleteCity(cityName);
    toast.current.show({
      severity: "error",
      summary: "Ottimo lavoro!",
      detail: "Città eliminata correttamente",
      life: 2000,
      closable: false,
    });
  };

  const addCity = () => {
    dispatch(addToPreferences(cityName));
  };

  const removeCity = () => {
    dispatch(removeToPreferences(cityName));
  };

  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />
      <div className="app__cities__container-card p-4 border border-gray-200 rounded-lg shadow-md flex flex-col gap-4 bg-white">
        <div className="text-center text-xl font-semibold text-gray-800">
          {cityName} ({region})
        </div>
        <div className="w-full flex flex-col gap-2 mt-auto">
          <Button
            
            className="bg-red-500 text-white hover:bg-red-600 rounded-md p-2 flex justify-center"
            onClick={deleteCurrentCity}
          >Cancella <i className="ml-3 pi pi-trash"></i></Button>
          {isPreferenceVisible &&
            (prefCities.includes(cityName) ? (
              <Button
                onClick={removeCity}
                className="w-full flex justify-center bg-green-500 text-white hover:bg-green-600 rounded-md p-2"
              >
                Rimuovi <i className="ml-3 pi pi-heart-fill"></i>
              </Button>
            ) : (
              <Button
                onClick={addCity}
                className="w-full flex justify-center bg-blue-500 text-white hover:bg-blue-600 rounded-md p-2"
              >
                Aggiungi <i className="ml-3 pi pi-heart"></i>
              </Button>
            ))}
        </div>
      </div>
    </>
  );
};

export default CityCard;
