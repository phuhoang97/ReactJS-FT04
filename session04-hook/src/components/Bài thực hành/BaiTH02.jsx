import React, { useState } from "react";

function BaiTH02() {
  const [product, setProduct] = useState([
    { id: 1, name: "Giày", price: 100 },
    { id: 2, name: "Dép", price: 200 },
    { id: 3, name: "Tông lào", price: 300 },
  ]);
  return (
    <div>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>price</td>
        </tr>
        {product.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BaiTH02;
