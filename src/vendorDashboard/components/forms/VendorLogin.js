import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import API_BASE_URL from '../../ApiPath/ApiConfig';

const VendorLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const LoginHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: name === 'email' ? value.toLowerCase() : value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log("Form submitted");
    
    try {
      const response = await axios.post(`${API_BASE_URL}/vendor/login`, formData); // Sending formData in the request body
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        alert("Login Success")
        setFormData({email: "",password: ""})
        localStorage.setItem("token",response.data.token)
      } else {
        console.error('Login failed:', response.data);
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? alert(error.response.data) : alert(error.message));
    }
  };

  return (
    <div className='Login d-flex flex-column justify-content-center align-items-center'>
      <h6 className='text-primary'>Vendor Login</h6>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            name='email' 
            value={formData.email} 
            aria-describedby="emailHelp" 
            onChange={LoginHandleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            name='password' 
            value={formData.password}  
            onChange={LoginHandleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default VendorLogin;
