import { Link } from "react-router-dom";

export const SelectedCategory = (props) => {
  const { id, title, price, image, description } = props.data;
  return (
    <>
      <div className="selected-product">
        <div className="select-product">
          <Link to={`/product/${id}`}>
            <img src={image} id="selected-product-pic" />
          </Link>
        </div>
        <div className="description">
          <h2 className="product-title">{title}</h2>

          <p className="product-price">${price}</p>
          <button className="add-cart-icon" onClick={() => addtocart(id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};
