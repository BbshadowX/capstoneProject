const ProductsAPI = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  try {
    const response = await fetch(ProductsAPI);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error fetching products");
  }
}

const user = [{name : Bryan},{pass : Crawford} ]


export const userLog = async (username, password) => {
  try {
    cosnt response = await fetch
  } catch (error) {
    console.error("There was and error /.");
  }
}