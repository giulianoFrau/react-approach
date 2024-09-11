import { useSelector } from "react-redux";

const PreferCities = ({ allCities }) => {
  const preferCities = useSelector((state) => state.cities.preferCities);

  // Crea una mappa per l'accesso rapido ai dati delle città
  const citiesMap = allCities.reduce((acc, city) => {
    acc[city.name.common.toLowerCase()] = city;
    return acc;
  }, {});

  // Raggruppa preferCities per lettera iniziale
  const groupedCities = preferCities.reduce((acc, cityName) => {
    const cityInfo = citiesMap[cityName.toLowerCase()];
    if (cityInfo) {
      const firstLetter = cityInfo.name.common.charAt(0).toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(cityInfo);
    }
    return acc;
  }, {});

  // Ordina le città all'interno di ciascun gruppo per lettera iniziale
  Object.keys(groupedCities).forEach((letter) => {
    groupedCities[letter].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  });

  return (
    <>
      {Object.keys(groupedCities).length <= 0 ? (
        <div>Non ci sono citta preferite</div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {Object.keys(groupedCities)
            .sort() // Ordina le lettere iniziali
            .map((letter) => (
              <div key={letter}>
                <div className="flex flex-col gap-3 text-3xl mb-3">
                  {letter}
                </div>
                {groupedCities[letter].map((city) => (
                  <div key={city.name.common} className="flex gap-2 mb-3">
                    <div>
                      {city?.flags?.png && (
                        <img
                          src={city.flags.png}
                          style={{ width: 30, height: 20 }}
                          alt={`Flag of ${city.name.common}`}
                        />
                      )}
                    </div>
                    <div>{city.name.common}</div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default PreferCities;
