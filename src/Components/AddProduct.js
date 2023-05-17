import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

    const [productName,setProductName]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const [file,setFile]=useState(null);

    const submitHandler=async(event)=>{
        
        event.preventDefault();

        const formData=new FormData;
        formData.append('productName',productName);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('file',file);

        try {
            // Make a POST request to the API endpoint
            const response = await axios.post(
              'https://apitextile.eyeterp.com/product/addproduct',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            );
      
            // Handle the response as needed
            console.log(response.data);
          } catch (error) {
            // Handle errors
            console.error(error);
          }

    };
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    


  return (
  <div style={{ display: 'flex', justifyContent: 'center', height: '100vh'  }}>
    <form onSubmit={submitHandler} style={{ width: '400px'}}>
        <label>
            Product Name: 
            <input type='text' value={productName} onChange={(event)=>setProductName(event.target.value)}  ></input>
        </label>
        <br/>
        <br/>
        <label>
            Description:  
            <input type='text'  value={description} onChange={(event)=>setDescription(event.target.value)}  ></input>
        </label>
        <br/>
        <br/>
        <label>
            Price :  
            <input type='number'   value={price} onChange={(event)=>setPrice(event.target.value)} ></input>
        </label>
        <br/>
        <br/>
        <label >
            File: 
            <input type='file' onChange={handleFileChange}  ></input>
        </label>
        <br/>
        <br/>
        
        <button type="submit">Add Product</button>

    </form>
    </div>
  
       
  )
}

export default AddProduct
