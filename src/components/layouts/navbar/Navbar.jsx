import CartWidget from "../../common/cartWidget/CartWidget";
import ButtonComponent from "../../common/buttonComponent/buttonComponent";
import "./navbar.css";
import logo from"../../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className ="logo"href="#"> <img src={logo} alt="logo Plantia" /></a>
       
          <ButtonComponent texto="Plantas" />
          <ButtonComponent texto="Árboles" />
          <ButtonComponent texto="Macetas" />
          <ButtonComponent texto="Plantas con Maceta" />
          <ButtonComponent texto="Accesorios" />
       
        <CartWidget />
        </nav>
    );
};

export default Navbar;