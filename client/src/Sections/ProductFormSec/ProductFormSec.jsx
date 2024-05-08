import React, { useState } from "react";
import "./ProductFormSec.css";

function ProductFormSec({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, description });
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add Product</h2>
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
    </div>
  );
}
export default ProductFormSec;

// function ProductList({ products, onUpdate, onDelete }) {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             <div>
//               <strong>{product.name}</strong> - ${product.price} -{" "}
//               {product.description}
//             </div>
//             <div>
//               <button onClick={() => onUpdate(index)}>Update</button>
//               <button onClick={() => onDelete(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
