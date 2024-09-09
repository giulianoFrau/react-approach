import { useState } from "react";
import { InputText } from "primereact/inputtext";
const CityForm = ({ addCity }) => {
  const [formData, setFormData] = useState({
    title: "",
  });
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
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col p-3 gap-2 w-80 bg-zinc-950 mb-5 mx-auto rounded-lg"
    >
      <label>Aggiungi stato</label>
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
  );
};

export default CityForm;
