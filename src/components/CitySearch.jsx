import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

import PreferCities from "./PreferCities";

const CitySearch = ({
  cityName,
  setCityName,
  totalResult,
  allCities,
  isVisiblePreference = true,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
<div className={
  isVisiblePreference 
  ? "flex flex-col p-4 gap-4 w-80 bg-white border border-gray-200 shadow-md flex-1 rounded-lg" 
  : "flex flex-col gap-4 w-80  rounded-lg ml-auto"
}>
  <h3 className="text-gray-700 font-bold text-lg">Ricerca uno stato</h3>
  <InputText
    className="border border-gray-300 rounded-md p-2 focus:border-indigo-500 focus:ring-indigo-500"
    placeholder="Ricerca per nome"
    onChange={(e) => setCityName(e.target.value)}
    value={cityName}
  />
  <small className="text-gray-500 text-left">
    {cityName.length > 0 && totalResult !== 0 ? `*Risultati trovati : ${totalResult}` : ""}
  </small>
  {isVisiblePreference && (
    <div>
      <h3 className="text-gray-700 font-bold text-lg">Oppure</h3>
      <u className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => setVisible(true)}>
        Clicca qui per vedere i tuoi preferiti
      </u>
    </div>
  )}
</div>
      <Dialog
        header="Le tue citta preferite"
        modal
        closable={false}
        visible={visible}
        dismissableMask={true}
        onShow={()=>setCityName("")}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <PreferCities allCities={allCities} />
      </Dialog>
    </>
  );
};

export default CitySearch;