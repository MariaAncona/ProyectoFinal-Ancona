import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../context/CartContext";
import { toast } from "sonner";

const Counter = ({ item }) => {
  console.log(item);
  console.log(item.stock);
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      alert(`Sólo hay ${JSON.stringify(item.stock)} en existencia`);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("mínimo un producto");
    }
  };

  const onAdd = () => {
    let objetoCarrito = { ...item, quantity: contador };
    addToCart(objetoCarrito);
    toast.success("Producto agregado", { closeButton: true });
  };
  return (
    <div className="counter-container">
      <h5>Cantidad</h5>
      <div className="counter-action">
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
      </div>
      <button className="btn-add-cart" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
