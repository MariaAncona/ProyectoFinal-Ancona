import "./itemListContainer.css";
import ProductCard from "../../common/productCard/productCard";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";

const ItemListContainer = () => {
  const { name } = useParams();
  console.log(name);

  const [items, setItems] = useState([]);

  useEffect(() => {
    let arrayFiltrado;
    if (name) {
      arrayFiltrado = products.filter((elemento) => elemento.category === name);
    }
    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      if (permiso) {
        resolve(name ? arrayFiltrado : products);
      } else {
        reject({ status: 400, message: "algo salió mal" });
      }
    });

    getProducts
      .then((res) => {
        setTimeout(() => {
          setItems(res);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <div className="page-container">
      <h1>Tienda</h1>

      {items.length === 0 ? (
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 1000,
            gap: "120px",
            margin: "70px",
          }}
        >
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Box>
      ) : (
        <div className="products-container">
          {items.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
