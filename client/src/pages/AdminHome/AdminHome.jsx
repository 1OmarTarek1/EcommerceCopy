import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../../api"; // Corrected import path

function ProductForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProduct({ name, price, description }); // Use the createProduct function from apis.js to add a new product
      onSubmit(response.data);
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

function ProductList({ products, onDelete, onUpdate }) {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <div>
            <strong>{product.name}</strong> - ${product.price} -{" "}
            {product.description}
          </div>
          <div>
            {/* <button onClick={() => onUpdate(product)}>Update</button> */}
            <button onClick={() => onDelete(product._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function AdminHome() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts(); // Use the getAllProducts function from apis.js to fetch products
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId); // Use the deleteProduct function from apis.js to delete a product
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // const handleUpdate = async (updatedProduct) => {
  //   try {
  //     await updateProduct(updatedProduct); // Use the updateProduct function from apis.js to update a product
  //     const updatedProducts = products.map((product) =>
  //       product._id === updatedProduct._id ? updatedProduct : product
  //     );
  //     setProducts(updatedProducts);
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //   }
  // };

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm onSubmit={addProduct} />
      <ProductList
        products={products}
        onDelete={handleDelete}
        // onUpdate={handleUpdate}
      />
    </div>
  );
}

export default AdminHome;
