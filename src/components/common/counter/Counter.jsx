import { useState } from "react";
import "./counter.css";


const Counter = ({item}) => {
    console.log (item);
    console.log (item.stock);
    const [contador, setContador] = useState(1)

    const sumar = () => {
        if( contador < item.stock) {
            setContador ( contador + 1);
        } else {
            alert (`Sólo hay ${JSON.stringify (item.stock)} en existencia`)
        }
        
    };

    const restar = () => {
        if (contador > 1) {
            setContador (contador - 1);
        } else {
            alert ("mínimo un producto");
        }
        
    };

    const onAdd = () => {
        alert (`Agregaste al carrito ${contador} ${item.title}`);
        let agregarCarrito = {...item, quantity: contador};
        console.log (agregarCarrito);
    };
  return (
    <div className="counter-container">
        <h5>Cantidad</h5>
        <div className="counter-action">
            <button onClick={restar}>-</button>
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button>
        </div>
        <button className="btn-add-cart" onClick={onAdd}>agregar al carrito</button>
    </div>
  );
};

export default Counter;