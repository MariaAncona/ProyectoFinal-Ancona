import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";
import "./itemdetail.css";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      <div className="separador">
        <h4>{item.category} </h4>
      </div>
      <div className="item-detail-container">
        <img src={item.imageUrl}></img>
        <div className="item-info">
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
          <h6>${item.price}</h6>
          <Counter item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
