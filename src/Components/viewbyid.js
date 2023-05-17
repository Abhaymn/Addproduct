import React, { useState } from 'react';
import axios from 'axios';

const ViewProductById = () => {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);

  const viewProductById = async () => {
    try {
      const response = await axios.get(
        'https://apitextile.eyeterp.com/product/productViewById',
        {
          params: {
            _id: productId
          }
        }
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label>
        Product ID:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <button onClick={viewProductById}>View Product by ID</button>

      {product && (
        <div>
          <h2>{product.productName}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {/* Display other product details as needed */}
        </div>
      )}
    </div>
  );
};

export default ViewProductById;
