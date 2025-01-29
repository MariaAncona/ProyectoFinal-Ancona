import "./cartWidget.css"
import { IconButton } from "@mui/material";
import { GrCart } from "react-icons/gr";
const CartWidget = () => {
    const handleCartClick = () => {
        alert (`Carrito vacio`)
    };
    return (
        <div className="cart-container">
        <h3 className="cart-number">0</h3>
        <IconButton onClick={handleCartClick}>
            <GrCart />
        </IconButton>
        </div>
    );
};

export default CartWidget;

