import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  /* reattività: creo le variabili e li suo metodo. dopo di che se la voglio chiamare al click la chiamo in altro modo,
  e dentro la funzione chiamo la setCount */
  const [count, setCount] = useState(0);
  function funzione() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="grid frid-cols-4 gap-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={funzione}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
