import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#222', color: '#fff', display:'flex', gap:'20px' }}>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
