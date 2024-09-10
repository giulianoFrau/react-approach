import { useSelector } from "react-redux";

const PreferCities = ({ allCities }) => {
  const preferCities = useSelector((state) => state.cities.preferCities);

  const citiesMap = allCities.reduce((acc, city) => {
    acc[city.name.common.toLowerCase()] = city;
    return acc;
  }, {});

  const groupedCities = preferCities.reduce((acc, cityName) => {
    const cityInfo = citiesMap[cityName.toLowerCase()];
    if (cityInfo) {
      const firstLetter = cityInfo.name.common.charAt(0).toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(cityInfo);
    }
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-3 gap-5">
      {Object.keys(groupedCities)
        .sort()
        .map((letter) => (
          <div key={letter}>
            <div className="flex flex-col gap-3 text-3xl mb-3">{letter}</div>
            {groupedCities[letter].map((city) => (
              <div
                key={city.name.common}
                className="flex gap-2 align-items-center justify-content-center"
              >
                <div className="mb-3">
                  {city.flags.png && (
                    <img
                      src={city.flags.png}
                      style={{ width: 30, height: 20 }}
                      alt={`Flag  ${city.name.common}`}
                    />
                  )}
                </div>

                <div>{city.name.common}</div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default PreferCities;
