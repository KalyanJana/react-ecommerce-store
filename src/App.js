import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Model from './components/Model';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route path="details" element={<Details/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<Default/>} />
      </Routes>
      <Model />
    </React.Fragment>

  );
}

export default App;
