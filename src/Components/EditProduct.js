import React, { useState } from 'react';
import axios from 'axios';


const EditProduct = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [_id, setProductId] = useState('');
  
    const handleEditProduct = async (event) => {
      event.preventDefault();
  
      try {
        
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('_id', _id);
  
        const response = await axios.put(
          'https://apitextile.eyeterp.com/product/editproduct',
          formData
        );
        console.log(response.data);
      } catch (error) {
        
        console.error(error);
        
    

      }
    };


    
  
    return (
      <div>
        <h1>Edit Product</h1>
        <form onSubmit={handleEditProduct}>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="_id">Product ID:</label>
            <input
              type="text"
              id="_id"
              value={_id}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
          <button type="submit">Edit Product</button>
        </form>
      </div>
    );
  };
  
  export default EditProduct;
  