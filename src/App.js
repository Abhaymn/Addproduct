import React, { Fragment } from 'react';
import AddProduct from './Components/AddProduct';

import './App.css';

import ViewProductById from './Components/viewbyid';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Combined from './Components/Combined';


function App() {
  return (
    <BrowserRouter>
    <>

    <Navbar bg='primary' expand='sm'variant='dark' className='fw fw-bold'>
      <Container className='navbar'>
        <Nav className='navbar'><NavLink as={Link} to='/'>Home</NavLink></Nav>
        
        <Nav className='navbar'><NavLink as={Link} to='/products'>Product</NavLink></Nav>
        <Nav className='navbar'><NavLink as={Link} to='/view'>view by Id </NavLink></Nav>
      </Container>
    </Navbar>
    
    </>

    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/products' element={<Combined/> } />
      <Route path='/view' element={<ViewProductById/>}/>
    </Routes>
    
    
    

    </BrowserRouter>

  );
}

export default App;
