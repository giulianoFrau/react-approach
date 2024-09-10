import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Button } from "primereact/button";
import { addToPreferences } from "../stores/citiesSlice";
import { useDispatch, useSelector } from "react-redux";

const CityCard = ({ cityName, deleteCity }) => {
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

  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />
      <div className="app__cities__container-card p-3 border rounded-md flex flex-col gap-2">
        <div>{cityName}</div>
        <Button label="Cancella" onClick={deleteCurrentCity} />

        <div>
          {!prefCities.includes(cityName) && (
            <Button label="Aggiungi ai preferiti" onClick={addCity}></Button>
          )}
        </div>
      </div>
    </>
  );
};

export default CityCard;
