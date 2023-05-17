import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ViewProduct = () => {

    

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const fetchProducts = async () => {
          try {
          
            const response = await axios.get(
              'https://apitextile.eyeterp.com/product/viewproduct'
            );
    
            
            setProducts(response.data);
          } catch (error) {
            
            console.error(error);
          }
        };
        fetchProducts();
      }, []);


      const deleteProduct = async (productId) => {
        try {
          const response = await axios.delete(
            'https://apitextile.eyeterp.com/product/deleteproduct',
            { data: { _id: productId } }
          );
          console.log(response.data);
         
          setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div>
      <h1>View Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            
            <h2>product: {product.productName}</h2>
            
            <p>description: {product.description} </p>
            <p>Price: {product.price}</p>
            <p>id: {product._id}</p>
            <img src={product.imageUrl} alt={product.imageUrl} style={{width:100}}/>
            <button onClick={() => deleteProduct(product._id)}>delete</button>
            
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default ViewProduct

