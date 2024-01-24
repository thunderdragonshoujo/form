'use client'
import React, { useState } from 'react';
export default function Form(){
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        date: '',
        order: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        fetch('http://localhost:8080/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
        // Add any further processing or submission logic here
        
        
      };

      const handleSearch = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        fetch('http://localhost:8080/getcontacts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
        // Add any further processing or submission logic here
        
        
      };

      

     

      return (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleInputChange} />
    
          <label>Address</label>
          <input name="address" value={formData.address} onChange={handleInputChange} />
    
          <label>Date</label>
          <input name="date" value={formData.date} onChange={handleInputChange} />
    
          <label>Order Number</label>
          <input name="order" value={formData.order} onChange={handleInputChange} />
    
          <input type="submit" className="submitButton" />
          <input type="button" value="Search" onClick={handleSearch} />
        </form>
      );
}