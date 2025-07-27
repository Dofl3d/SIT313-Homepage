import React from 'react';

const Email = () => {
  return (
    <div className="subscribe-box">
      <div className="subscribe-text">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      </div>
      <div className="row" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="form-control"
        />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Email;
