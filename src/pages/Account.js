import React, { useState } from 'react';
const Account = () => {
    const [account, setAccount] = useState({
      name: '',
      email: '',
      address: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAccount(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(account.email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
  
      setSuccessMessage('Account information saved!');
  
    
    };
  
    return (
      <div className="container">
        <h1 className="my-4">Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" value={account.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" value={account.email} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" id="address" name="address" value={account.address} onChange={handleChange} className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      </div>
    );
  };
  
  export default Account;