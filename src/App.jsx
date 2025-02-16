import Navbar from "./components/layouts/navbar/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Counter from "./components/common/counter/Counter";


function App() {

  return (
    <div>
      {<Navbar />}
      {<ItemListContainer greeting={"Bienvenido a Plantia"}/>}
      {<Counter />}
    </div>
      
  );
};

export default App
