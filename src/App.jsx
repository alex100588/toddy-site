import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ProductPage from './components/ProductPage/ProductPage';
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
