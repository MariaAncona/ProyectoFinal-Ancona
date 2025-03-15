import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    pais: "",
  });

  let total = getTotalAmount();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let order = {
      buyer: user,
      items: cart,
      total: total,
      options: options,
    };

    let refCollection = collection(db, "orders");
    const PromiseOrder = addDoc(refCollection, order);
    PromiseOrder.then((res) => {
      setOrderId(res.id);
      resetCart();
      setIsLoading(false);
    }).catch((error) => console.log({ error }));

    let productCollection = collection(db, "products");

    order.items.forEach((item) => {
      let productRef = doc(productCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const arrayPaises = [
    { label: "México", value: "mexico" },
    { label: "Argentina", value: "argentina" },
    { label: "Colombia", value: "colombia" },
    { label: "Brasil", value: "brasil" },
    { label: "Venezuela", value: "venezuela" },
  ];

  const [options, setOptions] = useState([]);

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOptions([...options, value]);
    } else {
      const optionsFiltered = options.filter((option) => option !== value);
      setOptions(optionsFiltered);
    }
  };

  return (
    <div>
      <div className="separador">
        <h2>checkout</h2>
      </div>

      {orderId ? (
        <div className="container-alert">
          <h2>Compra finalizada</h2>
          <h4>
            Ticket de compra: <span>{orderId}</span>
          </h4>
          <h5>¡Gracias por tu compra!</h5>
          <button>
            <Link to="/"> Volver a tienda</Link>
          </button>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="ticket">
            <h2>Productos</h2>
            {cart.map((elemento) => {
              return (
                <div className="products-ticket" key={elemento.id}>
                  <h4>{elemento.title}</h4>
                  <h4>Cantidad {elemento.quantity}</h4>
                  <h4>${elemento.price}</h4>
                </div>
              );
            })}
            <h2> Total: ${total}</h2>
          </div>
          <form className="form-checkout" onSubmit={handleSubmit}>
            <h2>Ingresas tus datos</h2>
            <div className="form-field">
              <label>Nombre:</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Apellido:</label>
              <input
                type="text"
                placeholder="Ingresa tu apellido"
                name="apellido"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>E-mail:</label>
              <input
                type="text"
                placeholder="Ingresa tu E-mail"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Teléfono:</label>
              <input
                type="text"
                placeholder="Ingresa tu teléfono"
                name="telefono"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Dirección</label>
              <input
                type="text"
                placeholder="Ingresa tu dirección"
                name="direccion"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Selecciona tu país</label>
              <select name="pais" onChange={handleChange}>
                {arrayPaises.map((pais) => {
                  return (
                    <option
                      key={pais.value}
                      value={pais.value}
                      label={pais.label}
                    />
                  );
                })}
              </select>
            </div>

            <div className="checkbox-field">
              <input type="checkbox" value="regalo" onChange={handleCheck} />
              <label>Envoltura de regalo </label>
            </div>
            <div className="checkbox-field">
              <input type="checkbox" value="urgente" onChange={handleCheck} />
              <label>Envio urgente </label>
            </div>
            <div className="btn-checkout">
              <button disabled={isLoading}>Comprar</button>
              <Link to="/cart">
                <button type="button">Volver al carrito</button>
              </Link>
            </div>
          </form>
        </div>
      )}

      {isLoading && <h2>Procesando Compra</h2>}
    </div>
  );
};

export default Checkout;
