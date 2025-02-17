import { products} from "../../../products";
import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";
import "./itemdetail.css"

const ItemDetail =() => {
    const {id} = useParams ();

    const [item, setItem] = useState ({})

    useEffect (() => {
        let producto = products.find ((product) => product.id === id )
        setItem (producto);

    }, [id]);

  return (
    <div className="item-detail-container">
        <img src={item.imageUrl}></img>
        <div className="item-info">
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
          <h6>${item.price}</h6>
          <Counter item = {item}/>
        </div>
    </div>
  );
};

export default ItemDetail;