const CityCard = ({ cityName }) => {
  return (
    <div className="app__cities__container-card p-3 border rounded-md">
      {cityName}
    </div>
  );
};

export default CityCard;
