import React, { useState } from 'react';
import axios from 'axios';
import './AddFirm.css'; // Ensure you import the CSS file
import API_BASE_URL from '../../ApiPath/ApiConfig';

const AddFirmProduct = () => {
  // State variables for the form inputs
  const [firmname, setFirmname] = useState('');
  const [area, setArea] = useState('');
  const [offers, setOffers] = useState('');
  const [category, setCategory] = useState({ veg: false, nonveg: false });
  const [region, setRegion] = useState({
    northIndian: false,
    southIndian: false,
    chinese: false, // Fixed spelling error from "chainise" to "chinese"
    japanese: false, // Fixed spelling error from "japanise" to "japanese"
  });


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert('JWT Token is missing');
      return;
    }
  
    // Construct the data object correctly
    const data = {
      firName: firmname, // Ensure this variable is defined and contains a value
      area,
      offers,
      category: [
        {
          veg: category.veg,      // category should be an object with boolean properties
          nonveg: category.nonveg, // Make sure these variables are defined
        },
      ],
      region: [
        {
          northIndian: region.northIndian, // Ensure these variables are defined
          southIndian: region.southIndian,
          chinese: region.chinese,
          japanese: region.japanese,
        },
      ],
    };
  
    console.log('Data being sent:', data); // Debugging line to inspect the data
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/firm/add-firm`,
        data,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log('Response:', response.data);
      alert("Form added successfully!");
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('An error occurred while adding the firm product.');
    }
  };
  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Add Firm Product</h2>
      <div className="form-group">
        <label htmlFor="firmname">Firm Name:</label>
        <input
          id="firmname"
          className="form-input"
          type="text"
          value={firmname}
          onChange={(e) => setFirmname(e.target.value)} // Update firmname state
          required // Ensure this field is filled
        />
      </div>
      <div className="form-group">
        <label htmlFor="area">Area:</label>
        <input
          id="area"
          className="form-input"
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)} // Update area state
          required // Ensure this field is filled
        />
      </div>
      <div className="form-group">
        <label htmlFor="offers">Offers:</label>
        <input
          id="offers"
          className="form-input"
          type="text"
          value={offers}
          onChange={(e) => setOffers(e.target.value)} // Update offers state
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={category.veg}
            onChange={(e) => setCategory({ ...category, veg: e.target.checked })} // Update veg category
          />
          Veg
          <input
            type="checkbox"
            checked={category.nonveg}
            onChange={(e) => setCategory({ ...category, nonveg: e.target.checked })} // Update nonveg category
          />
          Non-Veg
        </div>
      </div>
      <div className="form-group">
        <label>Region:</label>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={region.northIndian}
            onChange={(e) => setRegion({ ...region, northIndian: e.target.checked })} // Update northIndian region
          />
          North Indian
          <input
            type="checkbox"
            checked={region.southIndian}
            onChange={(e) => setRegion({ ...region, southIndian: e.target.checked })} // Update southIndian region
          />
          South Indian
          <input
            type="checkbox"
            checked={region.chinese}
            onChange={(e) => setRegion({ ...region, chinese: e.target.checked })} // Update chinese region
          />
          Chinese
          <input
            type="checkbox"
            checked={region.japanese}
            onChange={(e) => setRegion({ ...region, japanese: e.target.checked })} // Update japanese region
          />
          Japanese
        </div>
      </div>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default AddFirmProduct;
