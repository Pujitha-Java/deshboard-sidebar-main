import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Management from './pages/Management.jsx';
import Tickets from './pages/Tickets.jsx';
import ProductList from './pages/ProductList.jsx';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header/>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/management" element={<Management />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/productList" element={<ProductList />} />
          </Routes>
        </Sidebar>
      </div>
    </BrowserRouter>
  );
};

export default App;
