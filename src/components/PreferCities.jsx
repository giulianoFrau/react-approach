import { useSelector } from "react-redux";
const PreferCities = () => {
  const preferCities = useSelector((state) => state.cities.preferCities);

  // Raggruppa preferCities per lettera iniziale
  const groupedCities = preferCities.reduce((acc, city) => {
    const firstLetter = city.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(city);
    return acc;
  }, {});
  return (
    <>
      <div className="grid grid-cols-3 gap-5 ">
        {Object.keys(groupedCities)
          .sort()
          .map((letter) => (
            <div key={letter}>
              <div className="text-3xl mb-3">{letter}</div>
              {groupedCities[letter].map((city, i) => (
                <div key={i}>
                  <div>{city}</div>
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
