import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
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
    console.log(user);
    console.log(options);
};

const handleChange = (e) => {
    const {value, name} = e.target;
    setUser ({...user, [name]: value});
};

const arrayPaises = [
    {label: "México", value: "mexico"},
    {label: "Argentina", value: "argentina"},
    {label: "Colombia", value: "colombia"},
    {label: "Brasil", value: "brasil"},
    {label: "Venezuela", value: "venezuela"},
];

const [options, setOptions] = useState ([]);

const handleCheck = (e) => {
    const {value, checked} = e.target;
    if (checked) {
        setOptions ([...options, value]);
    }else {
        const optionsFiltered = options.filter ((option) => option !== value);
        setOptions(optionsFiltered);
    }

    };



return (
  <div>
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
        {arrayPaises.map ((pais)=>{
            return (
                <option key={pais.value} value={pais.value} label={pais.label}/>
            );
        })}
        </select>

        <div>
            <input type="checkbox" value="regalo" onChange={handleCheck}/>
            <label>Envoltura de regalo </label>
        </div>
        <div>
            <input type="checkbox" value="urgente" onChange={handleCheck}/>
            <label>Envio urgente </label>
        </div>

        <button>Comprar</button>
        <Link to="/cart">
        <button type= "button">Volver al carrito</button>
        </Link>
    </form>
  </div>
);
};

export default Checkout;
