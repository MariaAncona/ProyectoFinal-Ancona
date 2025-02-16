import { products} from "../../../products";
import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";

const ItemDetail =() => {
    const {id} = useParams ();

    const [item, setItem] = useState ({})

    useEffect (() => {
        let producto = products.find ((product) => product.id === id )
        setItem (producto);

    }, [id]);

  return (
    <div>
        <h2>{item.title}</h2>
        <h2>{item.description}</h2>
        <h2>{item.price}</h2>
        <Counter item = {item}/>
    </div>
  );
};

export default ItemDetail;