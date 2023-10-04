import { useParams } from "react-router-dom";
import { SelectedProduct } from "./SelectedProduct";

export const SingleProduct = ({ products }) => {
  const params = useParams();
  const SingleItem = products
    ? products.filter((product) => product.id === Number(params.id))
    : [];

  return (
    <>
      {SingleItem.map((product) => {
        return (
          <>
            <SelectedProduct key={product.id} data={product} />
          </>
        );
      })}
    </>
  );
};
