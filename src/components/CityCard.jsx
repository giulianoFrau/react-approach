import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Button } from "primereact/button";

const CityCard = ({ cityName, deleteCity }) => {
  const deleteCurrentCity = () => {
    deleteCity(cityName);
    toast.current.show({
      severity: "error",
      summary: "Ottimo lavoro!",
      detail: "Stato eliminato correttamente",
      life: 2000,
      closable: false,
    });
  };
  const toast = useRef(null);
  return (
    <>
      <Toast ref={toast} />
      <div className="app__cities__container-card p-3 border rounded-md flex flex-col gap-2">
        <div> {cityName}</div>
        <Button label="Cancella " onClick={deleteCurrentCity} />
      </div>
    </>
  );
};

export default CityCard;
