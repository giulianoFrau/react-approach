import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ProvaContext } from "../stores/ProvaContext";
const Example = () => {
  const [data, setData] = useState([]);
  /* useContext serve per passare dati tra componenti come fa provide inject */
  const { count } = useContext(ProvaContext);
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []); /* se vuoto viene chiamato quando monti il componente, se aggiungi dipendenze agisce come watch di vue*/

  return (
    <div className="flex flex-wrap mx-auto gap-5 ">
      <div>{count}</div>
      {data.map((item) => (
        <div
          className="card flex flex-col gap-5 align-items-center w-64 bg-zinc-950 p-2"
          key={item.id}
        >
          <p>{item.userId}</p>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Example;
