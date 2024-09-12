import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

const CityForm = ({ addCity }) => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const toast = useRef(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const newCity = {
      name: { common: formData.title.charAt(0).toUpperCase() + formData.title.slice(1) },
      region:"Europe" 
    };
    addCity(newCity);
    toast.current.show({
      severity: "success",
      summary: "Ottimo lavoro!",
      detail: "Stato aggiunto correttamente",
      life: 2000,
      closable: false,
    });

    setFormData({ title: "" });
  };

  return (
    <>
      <Toast ref={toast} />
      <form onSubmit={submitForm} className="flex flex-col p-4 gap-4 w-80 bg-white border border-gray-200 shadow-md flex-1 rounded-lg">
  <label className="text-gray-700 font-bold">Aggiungi uno stato</label>
  <InputText
    name="title"
    className="border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:ring-indigo-500"
    placeholder="Inserisci il nome dello stato"
    onChange={handleChange}
    value={formData.title}
  />
  <Button label="Invia" className="bg-indigo-400 text-white hover:bg-indigo-600 rounded-md p-2" />
</form>

    </>
  );
};

export default CityForm;