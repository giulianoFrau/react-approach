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
      <div className="app__cities__container-card p-3 border rounded-md flex flex-col gap-2">
        <div className="text-center text-2xl">
          {cityName + "(" + region + ")"}{" "}
        </div>
        <Button label="Cancella" onClick={deleteCurrentCity} />

        <div className={isPreferenceVisible ? "block" : "hidden"}>
          {prefCities.includes(cityName) ? (
            <Button onClick={removeCity}>
              {" "}
              Rimuovi
              <i className="ml-3 pi pi-heart-fill"></i>
            </Button>
          ) : (
            <Button onClick={addCity} className="w-full flex justify-center">
              Aggiungi <i className="ml-3 pi pi-heart"></i>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CityCard;
