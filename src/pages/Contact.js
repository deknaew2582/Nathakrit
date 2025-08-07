import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';

const ContactContainer = styled.div`
  padding: 6rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  min-height: 100vh;
  text-align: center;
  position: relative; /* Establishes stacking context */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.75rem;
  }
`;

const BackgroundCanvas = styled(Canvas)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 0; /* Background layer */
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 1; /* Content layer, above background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 1.5rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

const CallToAction = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 300px;
  }
`;

const StyledButton = styled.a`
  font-size: 1.2rem;
  color: #0A192F;
  background-color: #64FFDA;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s ease;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    width: 100%;
    text-align: center;
  }

  &:hover {
    background-color: #4CAF9D;
    color: #FFFFFF;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Contact = ({ id }) => {
  return (
    <ContactContainer id={id}>
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <ContentContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading>Let's build something great together.</Heading>
        <CallToAction>
          Feel free to reach out for project inquiries or collaborations.
        </CallToAction>
        <ButtonContainer>
          <StyledButton href="mailto:nathakrit.cha@gmail.com">
            Email Me
          </StyledButton>
          <StyledButton href="/Nathakrit-Chuajeen-Resume.pdf" download>
            Download Resume
          </StyledButton>
        </ButtonContainer>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;
