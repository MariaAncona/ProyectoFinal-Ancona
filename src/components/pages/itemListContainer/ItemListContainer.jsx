import "./itemListContainer.css";
import ProductCard from "../../common/productCard/productCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import ImageSlider from "../../common/slider/imageSlider";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;

    if (name) {
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", name)
      );
      consulta = coleccionFiltrada;
    }

    const getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  return (
    <div className="page-container">
      <div>{!name && <ImageSlider />}</div>
      <h1>{name ? `${name}` : "Tienda"}</h1>

      {items.length === 0 ? (
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 1000,
            gap: 20,
            mx: "auto",
            alignItems: "center",
          }}
        >
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Box>
      ) : (
        <div className="products-container">
          {items.map((item) => {
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                id={item.id}
                description={item.description}
                category={item.category}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
