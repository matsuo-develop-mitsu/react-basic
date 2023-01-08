import React, { useState } from "react";

const Basic2 = () => {
  const [products, setProducts] = useState([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: "Hello React World",
      },
    ]);
  };
  return (
    <>
      <button onClick={newProducts}>Add New Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            No.{product.id}
            {product.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Basic2;
