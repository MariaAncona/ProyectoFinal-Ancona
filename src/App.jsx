import Navbar from "./components/layouts/navbar/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import Checkout from "./components/pages/checkout/Checkout";
import CartContextProvider from "./components/context/CartContext";


function App() {

  return (

    <BrowserRouter>
      <CartContextProvider>

        <Navbar />
        <Routes>
          <Route path="/" element= {<ItemListContainer/> } />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element ={<Cart />} />
          <Route path="/checkout" element ={<Checkout />} />
          <Route path="/itemDetail/:id" element={<ItemDetail/>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
      
  );
};

export default App
