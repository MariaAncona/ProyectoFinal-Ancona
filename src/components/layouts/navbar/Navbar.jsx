import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo Plantia" />
        </Link>
      </div>
      <ul className="categories">
        <Link to="/">Todas</Link>
        <Link to="/category/plantas">Plantas</Link>
        <Link to="/category/arboles">Árboles</Link>
        <Link to="/category/macetas">Macetas</Link>
        <Link to="/category/extras">Extras</Link>
      </ul>
      <div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
