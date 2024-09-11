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
      <div
        className={
          isVisiblePreference
            ? "flex flex-col p-3 gap-2 w-80 bg-zinc-950  flex-1 rounded-lg"
            : "flex flex-col gap-2 w-80  rounded-lg ml-auto "
        }
      >
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
        <div className={isVisiblePreference ? "block" : "hidden"}>
          <h3>Oppure</h3>
          <u className="cursor-pointer" onClick={() => setVisible(true)}>
            Clicca qui per vedere i tuoi preferiti
          </u>
        </div>
      </div>
      <Dialog
        header="Le tue citta preferite"
        modal
        closable={false}
        visible={visible}
        dismissableMask={true}
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
