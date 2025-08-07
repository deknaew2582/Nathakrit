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
        <a href="https://www.linkedin.com/in/natakritc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/deknaew2582" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;