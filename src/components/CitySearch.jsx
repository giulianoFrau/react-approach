import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";

const CitySearch = ({ cityName, setCityName, totalResult }) => {
  const [visible, setVisible] = useState(false);
  const preferCities = useSelector((state) => state.cities.preferCities);
  return (
    <>
      <div className="flex flex-col p-3 gap-2 w-80 bg-zinc-950  flex-1 rounded-lg">
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
        <h3>Oppure</h3>
        <u className="cursor-pointer" onClick={() => setVisible(true)}>
          Clicca qui per vedere i tuoi preferiti
        </u>
      </div>
      <Dialog
        header="Header"
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
        <div>
          {preferCities.map((city, i) => (
            <div key={i}>
              <div>{city}</div>
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default CitySearch;
