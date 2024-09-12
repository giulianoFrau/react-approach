import { RadioButton } from "primereact/radiobutton";
const FilterRadio = ({ continentName, setContinentName }) => {
  return (
    <div className="flex flex-col py-4 gap-4">
       <h3 className="text-gray-700 font-bold text-lg">Filtra per continente</h3>
 <div className="card flex justify-content-center">
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center">
          <RadioButton
            inputId="europa"
            name="Europe"
            value="Europe"
            onChange={(e) => setContinentName(e.value)}
            checked={continentName === "Europe"}
          />
          <label htmlFor="europa" className="ml-2">
            Europa
          </label>
        </div>
        <div className="flex items-center">
          <RadioButton
            inputId="africa"
            name="Africa"
            value="Africa"
            onChange={(e) => setContinentName(e.value)}
            checked={continentName === "Africa"}
          />
          <label htmlFor="africa" className="ml-2">
            Africa
          </label>
        </div>
        <div className="flex items-center">
          <RadioButton
            inputId="asia"
            name="Asia"
            value="Asia"
            onChange={(e) => setContinentName(e.value)}
            checked={continentName === "Asia"}
          />
          <label htmlFor="asia" className="ml-2">
            Asia
          </label>
        </div>
        <div className="flex items-center">
          <RadioButton
            inputId="america"
            name="Americas"
            value="Americas"
            onChange={(e) => setContinentName(e.value)}
            checked={continentName === "Americas"}
          />
          <label htmlFor="america" className="ml-2">
            America
          </label>
        </div>
        <div className="flex items-center">
          <RadioButton
            inputId="Tutti"
            name="all"
            value="all"
            onChange={(e) => setContinentName(e.value)}
            checked={continentName === "all"}
          />
          <label htmlFor="Tutti" className="ml-2">
            Mostra tutti
          </label>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default FilterRadio;