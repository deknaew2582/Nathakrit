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
`;

const Subtitle = styled.h2`
  font-size: 2.8rem;
  color: #64FFDA;
  font-weight: 600;
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
