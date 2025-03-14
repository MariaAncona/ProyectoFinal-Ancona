import "./cartWidget.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <div className="cart-container">
      <Badge
        className="cart-widget"
        badgeContent={total}
        color="secundary"
        showZero={true}
      >
        <ShoppingCartOutlinedIcon color="black" />
      </Badge>
    </div>
  );
};

export default CartWidget;
