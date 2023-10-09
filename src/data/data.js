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

const API_URL = "https://fakestoreapi.com";

export const signUpUser = async (username, password, email, name) => {
  console.log(username, password, email, name);
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        name,
      }),
    });
    const result = await response.json();
    console.log("Register User---->", result);
    return result;
  } catch (error) {
    console.error("There was an errer signing up");
  }
};

export const logInUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    console.log("Login User--->", result);
    return result;
  } catch (error) {
    console.error("There was an error loging in", error);
  }
};
