import Navbar from "./components/layouts/navbar/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer";


function App() {

  return (
    <div>
      {<Navbar />}
      {<ItemListContainer greeting={"Bienvenido a Plantia"}/>}
    </div>
      
  );
};

export default App
