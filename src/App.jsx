import Navbar from "./components/layouts/navbar/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";


function App() {

  return (

    <BrowserRouter>
      {<Navbar />}
      <Routes>
        <Route path="/" element= {<ItemListContainer/> } />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element ={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail/>} />
        
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
      
  );
};

export default App
