import CartWidget from "../../common/cartWidget/CartWidget";
import ButtonComponent from "../../common/buttonComponent/buttonComponent";

const Navbar = () => {
    return (
        <div>
            <h3>logo</h3>
       

        <nav>
          <ButtonComponent texto="Plantas" />
          <ButtonComponent texto="Árboles" />
          <ButtonComponent texto="Macetas" />
          <ButtonComponent texto="Plantas con Maceta" />
          <ButtonComponent texto="Accesorios" />
        </nav>
        <CartWidget />
        </div>
    );
};

export default Navbar;