// client/src/components/ProductList.jsx
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ₹{p.price} 
            <button style={{ marginLeft: "10px" }} onClick={() => alert(`Ordered ${p.name}`)}>
              Order Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
