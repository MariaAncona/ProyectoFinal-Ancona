import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  const resetCartAlert = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar tu carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        resetCart();
        Swal.fire("Carrito vacio", "", "ok");
      } else if (result.isDenied) {
        Swal.fire("Tus productos siguen en el carrito", "", "info");
      }
    });
  };

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
            <button
              onClick={() => {
                removeById(elemento.id);
                toast.warning("Producto eliminado del carrito");
              }}
            >
              Eliminar
            </button>
          </div>
        );
      })}

      {cart.lenght > 0 && <h2>Total: $ {total}</h2>}

      <button onClick={resetCartAlert}>Vaciar tu carrito</button>
      <button>
        <Link to="/checkout"> Finalizar Compra</Link>
      </button>
    </div>
  );
};

export default Cart;
