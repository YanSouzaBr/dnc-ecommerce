import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  console.log(data.title);
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="modelo" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <button>
          <Link to={`/products/${data.id}`}>Comprar</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
