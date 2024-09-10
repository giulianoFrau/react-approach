import axios from "axios";
import { useEffect, useState } from "react";
const Example = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap mx-auto gap-5 ">
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
