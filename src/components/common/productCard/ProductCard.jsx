import { Link } from "react-router";

const productCard = ({ price, title, stock, id, }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{stock}</h4>
      <link></link>

      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default productCard;
