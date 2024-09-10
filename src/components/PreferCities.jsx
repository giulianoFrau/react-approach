import { useSelector } from "react-redux";

const PreferCities = ({ allCities }) => {
  const preferCities = useSelector((state) => state.cities.preferCities);

  // Crea un oggetto per un accesso rapido ai dati delle città
  const citiesMap = allCities.reduce((acc, city) => {
    acc[city.name.common.toLowerCase()] = city;
    return acc;
  }, {});

  // Raggruppa preferCities per lettera iniziale
  const groupedCities = preferCities.reduce((acc, city) => {
    const cityLower = city.toLowerCase();
    const cityInfo = citiesMap[cityLower];
    if (cityInfo) {
      const firstLetter = cityInfo.name.common.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(cityInfo);
    }
    return acc;
  }, {});

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {Object.keys(groupedCities)
          .sort()
          .map((letter) => (
            <div key={letter}>
              <div className="text-3xl mb-3">{letter}</div>
              {groupedCities[letter].map((city, i) => (
                <div key={i}>
                  {city.flags.png && (
                    <img
                      src={city.flags.png}
                      alt={`Flag of ${city.name.common}`}
                      style={{ width: 50, height: 30 }}
                    />
                  )}
                  <div>{city.name.common}</div>
                  <hr />
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default PreferCities;
