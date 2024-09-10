import { useState } from "react";
import { add } from "../redux/citiesSlice";
import { useDispatch } from "react-redux";

const CardForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: "",
    isVisited: false,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const newCity = {
      title: formData.title,
      description: formData.description,
      imgUrl: formData.imgUrl,
      isVisited: formData.isVisited,
    };
    dispatch(add(newCity));
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col p-3 gap-2 w-80 bg-zinc-950 mb-5 mx-auto"
    >
      <label>title</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />
      <label>description</label>
      <input
        type="text"
        name="description"
        onChange={handleChange}
        value={formData.description}
      />
      <label>imgUrl</label>
      <input
        type="text"
        name="imgUrl"
        onChange={handleChange}
        value={formData.imgUrl}
      />

      <label>visitata</label>
      <input
        type="checkbox"
        name="isVisited"
        onChange={handleChange}
        checked={formData.isVisited}
      />

      <button type="submit">Invia</button>
    </form>
  );
};

export default CardForm;
