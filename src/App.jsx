import Cards from "./components/Cards";
import "./App.css";
import CardForm from "./components/CardForm";
import { increment, decrement } from "./redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  /* USESELECTOR SI USA QUANDO DALLO STORE VOGLIO PRENDERE UN VALORE, DISPATCH PER ESEGUIRE UNA ACTION */
  const cities = useSelector((state) => state.cities.value);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <CardForm />
      <div className="card flex flex-col gap-2">
        <div>Conteggio : {count}</div>
        <div className="card flex flex gap-2">
          <button onClick={() => dispatch(increment())}>Incrementa</button>
          <button onClick={() => dispatch(decrement())}>Decrementa</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mb-5">
        {cities.map((city, i) => (
          <Cards
            key={i}
            title={city.title}
            imgUrl={city.imgUrl}
            isVisited={city.isVisited}
          >
            {city.description}
          </Cards>
        ))}
      </div>
    </>
  );
}

export default App;
