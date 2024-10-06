import React, { useState } from 'react';
import API_BASE_URL from '../../ApiPath/ApiConfig';
import "./style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VendorRegistration = () => {
    const navigate = useNavigate();
    // Initialize formData state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting data:', formData); // Log the form data
        try {
            const response = await axios.post(`${API_BASE_URL}/vendor/register`, formData);
            console.log(response)
            if (response.status === 201) {
                console.log('Form submitted successfully', response.data);
                //alert("Vendor Registered Successfully");
                setFormData({ username: "", email: "", password: "" });
                navigate("/login")
            } else {
                console.error('Error submitting form');
                //alert("Error submitting form");
            }
        } catch (error) {
            alert("Email Already Present");
            console.error('Axios error:', error.response ? alert(error.response.data) : alert(error.message));
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'email' ? value.toLowerCase() : value, 
        });
    };

    return (
        <div className='Login d-flex flex-column justify-content-center align-items-center'>
            <h6 className='text-primary'>Vendor Registration</h6>
            <form style={{ width: "300px" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default VendorRegistration;
