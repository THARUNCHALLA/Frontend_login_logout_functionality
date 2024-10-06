import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendorLogin from './vendorDashboard/components/forms/VendorLogin';
import VendorRegistration from './vendorDashboard/components/forms/VendorRegistration.js';
import Navbar from './vendorDashboard/components/Navbar';
import Sidebar from './vendorDashboard/components/Sidebar';
import AddFirm from "./vendorDashboard/components/forms/AddFirm.js"
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='d-flex justify-content-between align-items-center'>
    <Sidebar/>
    <div className='mx-auto'>
    <Routes>
      <Route path="/login" element={<VendorLogin/>}/>
      <Route path="/register" element={<VendorRegistration/>}/>
      <Route path="/AddFirm" element={<AddFirm/>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
};

export default App;



//using rafce command directly it return one component