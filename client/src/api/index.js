import axios from "axios";

// Create separate API instances for each service
const usersServiceApi = axios.create({
  baseURL: "http://localhost:5000/api",
});

const productsServiceApi = axios.create({
  baseURL: "http://localhost:5001/api",
});

const weatherServiceApi = axios.create({
  baseURL: "http://localhost:5002/api",
});

const shoppingCartServiceApi = axios.create({
  baseURL: "http://localhost:5003/api",
});

// Define functions to interact with each service
export const userAuthenticate = (payload) =>
  usersServiceApi.post(`/user/auth`, payload);

export const getAllProducts = () => productsServiceApi.get(`/products`);
// Modify the getAllProducts function to accept any parameters if needed

export const getWeather = () => weatherServiceApi.get(`/weather`);

export const getProductsFromCart = (id) =>
  shoppingCartServiceApi.get(`/cart/${id}`);
// Modify the getProductsFromCart function to accept any parameters if needed

export const addProductToCart = (payload) =>
  shoppingCartServiceApi.post(`/cart`, payload);
// Modify the addProductToCart function to accept any parameters if needed

export const deleteProduct = (productId) =>
  productsServiceApi.delete(`/delete-product/${productId}`); // Define the deleteProduct function here

export const updateProduct = (productId) =>
  productsServiceApi.put(`/update-product/${productId}`); // Define the deleteProduct function here

export const createProduct = (productData) =>
  productsServiceApi.post(`/create-product`, productData);

// Bundle all API functions into one object for export
const apis = {
  userAuthenticate,
  getAllProducts,
  getWeather,
  getProductsFromCart,
  addProductToCart,
  deleteProduct, // Add the deleteProduct function to the exported object
  createProduct,
  updateProduct,
};

export default apis;
