import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
    return (
        <div>
            <h3>logo</h3>
       

        <ul>
            <li>Plantas</li>
            <li>Árboles</li>
            <li>Macetas</li>
            <li>Plantas en Maceta</li>
            <li>Materiales</li>
        </ul>
        <CartWidget />
        </div>
    );
};

export default Navbar;