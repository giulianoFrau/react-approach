import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <Cards
        title="Roma"
        imgUrl="https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.jpg?s=1024x1024&w=is&k=20&c=MTO5DpZiJrbDhNfGRdBJIq9nU0WV-Hqk13ojlMJbGwY="
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        tempore in, quo consequatur voluptatum error necessitatibus, harum
        numquam tenetur omnis odio. Error ea earum voluptate praesentium.
        Molestias quae odit explicabo!{" "}
        {/* questo è un children, messo dentro Cards, da mettere come oggetto di parametro della funzione*/}
      </Cards>
      <Cards
        title="Milano"
        imgUrl="https://media.istockphoto.com/id/687224330/it/foto/piazza-del-duomo-un-duomo-milano-allalba.jpg?s=1024x1024&w=is&k=20&c=SF9tMNGWcA6CEdPXnxz1zrE0eE-IBPTQCKZmNM6nMHw="
      />
      <Cards
        title="Napoli"
        imgUrl="https://media.istockphoto.com/id/1097360124/it/foto/veduta-aerea-di-napoli-italia.jpg?s=1024x1024&w=is&k=20&c=4m9nKc8TTID0MK7q6JlfQniQz2Zs-NbxbEllr2s7FiU="
      />
      <Cards
        title="Cagliari"
        imgUrl="https://media.istockphoto.com/id/528438369/it/foto/cagliari-italia-paesaggio-urbano.jpg?s=1024x1024&w=is&k=20&c=hvLNnBtUJsBE3Wr0OpAaOkEdotnMekOPiiUld0czI5s="
      />
    </div>
  );
}

export default App;
