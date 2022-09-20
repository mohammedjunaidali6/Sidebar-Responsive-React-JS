import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import About from './pages/About.js';
import Analytics from './pages/Analytics.js';
import Dashboard from './pages/Dashboard.js';
import Product from './pages/Product.js';
import ProductList from './pages/ProductList.js';
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App; 
