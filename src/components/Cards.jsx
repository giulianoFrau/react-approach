const Cards = ({ imgUrl, title, children }) => {
  return (
    <div className="rounded-md bg-zinc-950 ">
      <img src={imgUrl} />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-gray-500">{children}</p>
      </div>
    </div>
  );
};

export default Cards;
