import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Header = () => (
  <header>
    <Navbar  expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/legacy">Legacy</NavLink></li>
          <li><NavLink to="/timeline">Timeline</NavLink></li>
          <li><NavLink to="/photogallery">Photo Gallery</NavLink></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;

// <ul>
//   <li><NavLink exact to="/">Home</NavLink></li>
//   <li><NavLink to="/legacy">Legacy</NavLink></li>
//   <li><NavLink to="/timeline">Timeline</NavLink></li>
//   <li><NavLink to="/photogallery">Photo Gallery</NavLink></li>
// </ul>
