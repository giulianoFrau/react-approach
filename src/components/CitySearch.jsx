import { InputText } from "primereact/inputtext";

const CitySearch = ({ cityName, setCityName }) => {
  return (
    <>
      <div className="flex flex-col p-3 gap-2 w-80 bg-zinc-950 mb-5 mx-auto rounded-lg">
        <h3>Ricerca uno stato</h3>
        <InputText
          className="border text-indigo-500 p-2"
          placeholder="Ricerca per nome"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        ></InputText>
      </div>
    </>
  );
};

export default CitySearch;
