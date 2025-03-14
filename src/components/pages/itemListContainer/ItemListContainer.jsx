import "./itemListContainer.css";
import ProductCard from "../../common/productCard/productCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  console.log(name);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    const getProducts = getDocs(coleccionDeProductos);
    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
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
