import React from 'react';
import styled from 'styled-components';

import MagneticButton from './MagneticButton';
const Nav = styled.nav`
  background-color: #0A192F;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  a {
    color: #FFFFFF;
    text-decoration: none;
    margin-left: 2.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      margin-left: 0;
      font-size: 1.1rem;
      padding: 0.4rem 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.35rem 0.7rem;
    }

    &:hover {
      color: #64FFDA;
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>Nathakrit Chuajeen</div>
      <NavLinks>
        <MagneticButton><a href="#services">Services</a></MagneticButton>
        <MagneticButton><a href="#portfolio">Portfolio</a></MagneticButton>
        <MagneticButton><a href="#about">About</a></MagneticButton>
        <MagneticButton><a href="#contact">Contact</a></MagneticButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
