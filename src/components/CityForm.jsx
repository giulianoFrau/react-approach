import { useState } from "react";

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
      className="flex flex-col p-3 gap-2 w-80 bg-zinc-950 mb-5 mx-auto"
    >
      <label>Aggiungi stato</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />

      <button type="submit">Invia</button>
    </form>
  );
};

export default CityForm;
