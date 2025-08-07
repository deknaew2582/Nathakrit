import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const BackgroundCanvas = styled(Canvas)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 5.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.8rem;
  color: #64FFDA;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    line-height: 1.3;
  }
`;

const Home = ({ id }) => {
  return (
    <HomeContainer id={id}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <MagneticButton><Title>Nathakrit Chuajeen</Title></MagneticButton>
      <MagneticButton><Subtitle>Software Developer & AI Innovator</Subtitle></MagneticButton>
    </HomeContainer>
  );
};

export default Home;
