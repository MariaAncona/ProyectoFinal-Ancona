import "./itemListContainer.css"
import ProductCard from "../../common/productCard/productCard";
import { products } from "../../../products";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

    const [items, setItems] = useState ([]);

    useEffect (() => {
        const getProducts = new Promise (( resolve, reject) => {
            let permiso = true;
            permiso ? resolve (products): reject ({ status: 400, message: "algo salió mal"});
    });

    getProducts 
    .then ((res) => {
        setItems (res);
    })
    .catch ((error) => {
        console.log(error);
    });
}, []);

return (
    <div>
        <h1>Todos mis productos</h1>
        {items.map((item) => {
            return (
            <ProductCard key={item.id} {...item} />
        );
        })}
    </div>
    );
};

export default ItemListContainer;