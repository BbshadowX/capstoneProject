import { Product } from "../Product/Product";

export const ProductsAccending = ({ products }) => {
  const AccendingItems = products
    ? products.filter((product) => product.title === product.title)
    : [];
  return <></>;
};
