import { useReducer, useState } from "react";
import Cards from "./components/Cards";
import "./App.css";
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import { ProvaContext } from "./stores/ProvaContext";

function App() {
  /* ****************** FORM AGGIUNTA CARD *********************************/
  const [cities, setCities] = useState([
    {
      title: "Roma",
      isVisited: true,
      imgUrl:
        "https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.jpg?s=1024x1024&w=is&k=20&c=MTO5DpZiJrbDhNfGRdBJIq9nU0WV-Hqk13ojlMJbGwY=",
      description:
        "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },

    {
      title: "Milano",
      isVisited: false,
      imgUrl:
        "https://media.istockphoto.com/id/687224330/it/foto/piazza-del-duomo-un-duomo-milano-allalba.jpg?s=1024x1024&w=is&k=20&c=SF9tMNGWcA6CEdPXnxz1zrE0eE-IBPTQCKZmNM6nMHw=",
      description:
        "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },

    {
      title: "Napoli",
      isVisited: false,
      imgUrl:
        "https://media.istockphoto.com/id/1097360124/it/foto/veduta-aerea-di-napoli-italia.jpg?s=1024x1024&w=is&k=20&c=4m9nKc8TTID0MK7q6JlfQniQz2Zs-NbxbEllr2s7FiU=",
      description:
        "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam  tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },

    {
      title: "Cagliari",
      isVisited: true,
      imgUrl:
        "https://media.istockphoto.com/id/528438369/it/foto/cagliari-italia-paesaggio-urbano.jpg?s=1024x1024&w=is&k=20&c=hvLNnBtUJsBE3Wr0OpAaOkEdotnMekOPiiUld0czI5s=",
      description:
        " 4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam tempore in, quo consequatur voluptatum error necessitatibus, harum numquam tenetur omnis odio. Error ea earum voluptate praesentium.",
    },
  ]);

  const aggiungiCitta = (newCity) => {
    setCities([...cities, newCity]);
  };

  const [count, setCount] = useState(0);

  /* *********** FORM USANDO useReducer *************************************** */
  const [formData, dispatchFormData] = useReducer(formReducer, {
    name: "",
    email: "",
  });
  function handleFieldChange(field, value) {
    dispatchFormData({ type: "CHANGE_FIELD", field, value });
  }
  function resetForm(e) {
    e.preventDefault();
    dispatchFormData({ type: "RESET_FORM" });
  }

  function scriviValori(e) {
    e.preventDefault();
    dispatchFormData({ type: "SCRIVI_GIULIANO" });
  }

  function sendForm(e) {
    e.preventDefault();
    console.log(formData);
    resetForm(e);
  }

  function formReducer(state, action) {
    switch (action.type) {
      case "CHANGE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET_FORM":
        return {
          name: "",
          email: "",
        };
      case "SCRIVI_GIULIANO":
        return {
          email: "a@a.com",
          name: "giuliano",
        };
      default:
        return state;
    }
  }

  /***************** ALTRI ESEMPI *********************** */

  const [person, setPerson] = useState({
    nome: "Giuli",
    cognome: "1234",
  });
  /* questa la mandiamo al componente figlio, come props */

  const [city, setCity] = useState("");

  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  function doubleArray() {
    setItems(items.map((item) => item * 2));
  }

  function changeName() {
    const updateName = { ...person, nome: "Gessi" };
    setPerson(updateName);
  }
  function somma(num) {
    console.log(num + 5);
  }

  return (
    <ProvaContext.Provider value={{ count, setCount }}>
      <CardForm addCity={aggiungiCitta} />
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
      <div className="flex flex-col p-2 border my-5">
        <h1>Use Reducer</h1>
        <form className="flex flex-col gap-2">
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleFieldChange("email", e.target.value)}
            />
          </div>
          <button onClick={resetForm}>Reset</button>
          <button onClick={sendForm}>Invia</button>
          <button onClick={scriviValori}>Scrivi valori</button>
        </form>
      </div>

      <Example />

      <div className="card flex flex-col gap-2">
        {/* Funzione anonima al click */}
        <button onClick={() => setCount(count + 1)}>
          Hai cliccato {count}
        </button>
        {/* use state al click modifica elementi array duplicandoli */}
        <button onClick={doubleArray}>Duplica array {items}</button>

        <hr />
        {/* use state al click modifica elementi oggetti duplicandoli */}
        <button onClick={changeName}>cambia nome oggetto {person.nome}</button>

        <hr />
        {/* Funzione anonima al click passando parametro */}
        <button onClick={() => somma(5)}>clicca</button>
        <hr />
        {/* Input utilizzando useState su un singolo valore */}
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <span>{city}</span>
        <hr />
      </div>
    </ProvaContext.Provider>
  );
}

export default App;
