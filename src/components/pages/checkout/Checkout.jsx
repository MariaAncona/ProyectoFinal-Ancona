import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let total = getTotalAmount();
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
      <div>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id}>
              <img src={elemento.imageUrl}></img>
              <h2>{elemento.title}</h2>
              <h2>{elemento.quantity}</h2>
              <h2>{elemento.price}</h2>
            </div>
          );
        })}
      </div>
      {orderId ? (
        <h2>Gracias por tu compra es {orderId}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Teléfono"
            name="telefono"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Dirección"
            name="direccion"
            onChange={handleChange}
          />
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

          <div>
            <input type="checkbox" value="regalo" onChange={handleCheck} />
            <label>Envoltura de regalo </label>
          </div>
          <div>
            <input type="checkbox" value="urgente" onChange={handleCheck} />
            <label>Envio urgente </label>
          </div>

          <button disabled={isLoading}>Comprar</button>
          <Link to="/cart">
            <button type="button">Volver al carrito</button>
          </Link>
        </form>
      )}

      {isLoading && <h2>Procesando Compra</h2>}
    </div>
  );
};

export default Checkout;
