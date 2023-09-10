import React from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} /> 
          <Route path="/PreEntrega1Haddad-React" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
