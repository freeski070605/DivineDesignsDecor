import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Divine Designs</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
