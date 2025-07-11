import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0A192F;
  color: #FFFFFF;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  a {
    color: #64FFDA;
    text-decoration: none;
    margin: 0 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Nathakrit Chuajeen © 2025</p>
      <p>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
