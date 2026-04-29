import React from 'react';

function Navbar() {
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      background: '#ffffffcc',
      backdropFilter: 'blur(10px)',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
      <h3>Waqas Ahmad</h3>
      <div>
        <a href="#about">About</a> | 
        <a href="#research"> Research</a> | 
        <a href="#projects"> Projects</a>
      </div>
    </div>
  );
}

export default Navbar;