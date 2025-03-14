import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { toast } from "sonner";
import "./cart.css";

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
    <div className="container-carrito">
      <div className="separador">
        <h2>Resumen de compra</h2>
      </div>

      {cart.map((elemento) => {
        return (
          <div className="resume-carrito" key={elemento.id}>
            <div className="info-carrito">
              <img src={elemento.imageUrl}></img>
              <div className="text-info-carrito">
                <h3>{elemento.title}</h3>
                <h4>Cantidad: {elemento.quantity}</h4>
                <h4>${elemento.price}</h4>
              </div>
            </div>
            <button
              className="btn-delete"
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

      {cart.length > 0 && <h2>El total a pagar es $ {total}</h2>}

      <button onClick={resetCartAlert}>Vaciar tu carrito</button>
      <button>
        <Link to="/checkout"> Finalizar Compra</Link>
      </button>
    </div>
  );
};

export default Cart;
