import { InputText } from "primereact/inputtext";

const CitySearch = ({ cityName, setCityName, totalResult }) => {
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

        <small className="text-red-500 text-left">
          {cityName.length > 0 && totalResult !== 0
            ? `*Risultati trovati : ${totalResult}`
            : ""}
        </small>
      </div>
    </>
  );
};

export default CitySearch;
