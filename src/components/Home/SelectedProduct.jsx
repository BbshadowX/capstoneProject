import { Link } from "react-router-dom";

export const SelectedProduct = (props) => {
  const { id, title, price, image, description } = props.data;
  return (
    <div className="s-product">
      <div className="selected-product">
        <div className="select-product">
          <Link to={`/product/${id}`}>
            <img src={image} id="selected-product-pic" />
          </Link>
        </div>
        <div className="description">
          <h2 className="product-title">{title}</h2>
          <br />
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <div className="add-cart-product">
            <button className="add-cart-icon" onClick={() => addtocart(id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
