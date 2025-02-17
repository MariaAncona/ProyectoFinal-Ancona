import "./itemListContainer.css"
import ProductCard from "../../common/productCard/productCard";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { name } = useParams();
    console.log(name)

    const [items, setItems] = useState ([]);

    useEffect (() => {
        let arrayFiltrado;
        if (name) {
            arrayFiltrado = products.filter ((elemento) => elemento.category === name);
        } 
        const getProducts = new Promise (( resolve, reject) => {
            let permiso = true;
            if (permiso){
                resolve (name ? arrayFiltrado : products);
            } else {
                reject ({ status: 400, message: "algo salió mal"});
            }
    });

    getProducts 
    .then ((res) => {
        setItems (res);
    })
    .catch ((error) => {
        console.log(error);
    });
}, [name]);

return (
    <div className="page-container">
        <h1>Tienda</h1>
        
        <div className="products-container">
            
            {items.map((item) => {
                return (
                <ProductCard key={item.id} {...item} />
            );
            })}
        </div>
    </div>
    
    );
};

export default ItemListContainer;