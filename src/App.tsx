import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CreateProduct from './components/products/CreateProduct';
import Login from './components/accounts/Login';
import { Register } from './components/accounts/Register';
import ProductsList from './components/products/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          <Route path="create-product" element={<CreateProduct />} />
           
         
        </Route>
      </Routes>
    </div >
  );
}

export default App;
