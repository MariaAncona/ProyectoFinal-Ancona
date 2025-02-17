import { Link } from "react-router";
import "./productcard.css"

const productCard = ({ price, title, id, imageUrl,description }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt="" />
      <div className="product-info">
        <h3>{title}</h3>
        <h4>${price}</h4>
        <h5>{description}</h5>
      </div>

      <Link to={`/itemDetail/${id}`}>
        <button className="button-detail">Ver detalle</button>
      </Link>
    </div>
  );
};

export default productCard;
