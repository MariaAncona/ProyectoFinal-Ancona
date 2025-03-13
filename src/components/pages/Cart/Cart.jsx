import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <img src={elemento.imageUrl}></img>
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <button onClick={() => {removeById(elemento.id);}}>Eliminar</button>
          </div>
        );
      })}
      <h2>Total: $ {total}</h2>
      <button onClick={resetCart}>Vaciar tu carrito</button>
      <button>
        <Link to="/checkout"> Finalizar Compra</Link>
      </button>
    </div>
  );
};

export default Cart;
