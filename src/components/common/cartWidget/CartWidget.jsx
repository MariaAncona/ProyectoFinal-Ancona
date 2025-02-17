import "./cartWidget.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";


const CartWidget = () => {
    // const handleCartClick = () => {
    //     alert (`Carrito vacio`)
    // };
    return (
        
        <Badge badgeContent={1} color="secundary">
        <ShoppingCartOutlinedIcon color="black"/>
        </Badge>
    );
};

export default CartWidget;

