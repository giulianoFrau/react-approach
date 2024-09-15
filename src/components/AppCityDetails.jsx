

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const AppCityDetails = () => {
  const location = useLocation();
  const { city } = location.state || {};
  return (
    <div className="app__details w-11/12 sm:w-1/2 m-auto my-10 p-6 bg-white border border-gray-200 shadow-lg rounded-lg text-center text-xl ">
      <div className="text-3xl font-semibold text-gray-800 mb-2"> {city.name.common}</div>
      {city.flags? 
      <div className="flex flex-col justify-center gap-2 mb-5 items-center">

          <img src={city.flags.png} alt={city.name.common} className="sm:w-1/4 mx-auto"/>
          <div><b>Regione:</b> {city.region}</div>  
          <div><b>Capitale:</b> {city.capital[0]}</div>
          <div><b>Popolazione:</b> {city.population}</div>
          <div><b>Regione Appartenenza:</b> {city.subregion}</div>
          <div><b>Stato indipendente:</b> {city.independent==true?'Si':'No'}</div>
          <div><b>Lato guida:</b> {city.car.side=='left'?'Sinistro':'Destro'}</div>
      </div>:<div className="mb-5">Nessuna informazione disponibile per lo stato {city.name.common}</div>}
      <Link className="underline rounded-md p-2 " to="/">
      Torna alla home
      </Link>

    </div>
  )
}

export default AppCityDetails
