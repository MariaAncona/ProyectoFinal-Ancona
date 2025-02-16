import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/">
        <img src={logo} alt="logo Plantia" />
     </Link>
   

      <ul>
        <Link to="/">
          <li>Todas</li>
        </Link>
        <Link to="/category/plantas">
          <li>Plantas</li>
        </Link>
        <Link to="/category/arboles">
          <li>Árboles</li>
        </Link>
        <Link to="/category/macetas">
          <li>Macetas</li>
        </Link>
        <Link to="/category/extras">
          <li>Extras</li>
        </Link>
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
