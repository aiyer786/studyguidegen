// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="materials">
        <Link to="/study-materials">Study Materials</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
