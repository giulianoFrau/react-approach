import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

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
      name: { common: formData.title },
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
      <form
        onSubmit={submitForm}
        className="flex flex-col p-3 gap-2 w-80 bg-zinc-950 flex-1 rounded-lg"
      >
        <label>Aggiungi uno stato</label>
        <InputText
          name="title"
          className="border text-indigo-500 p-2"
          placeholder="Inserisci il nome dello stato"
          onChange={handleChange}
          value={formData.title}
        />
        <small className="text-left text-red-500">
          *Inserisci la prima lettera maiuscola
        </small>

        <button type="submit">Invia</button>
      </form>
    </>
  );
};

export default CityForm;
