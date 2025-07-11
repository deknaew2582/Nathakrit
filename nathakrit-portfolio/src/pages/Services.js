import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';

const ServicesContainer = styled.div`
  padding: 6rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  min-height: 100vh;
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
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #64FFDA;
`;

const ServiceGrid = styled(motion.div)` // Changed to motion.div
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)` // Changed to motion.div
  background-color: #112240;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-10px) scale(1.03) rotateZ(2deg); /* Added scale and rotation */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4), 0 0 15px #64FFDA; /* Added glow effect */
    border: 1px solid #64FFDA;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #64FFDA;
  transition: text-shadow 0.3s ease-in-out; /* Added transition */

  ${ServiceCard}:hover & { /* Apply when parent ServiceCard is hovered */
    text-shadow: 0 0 10px #64FFDA; /* Glow effect */
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Services = ({ id }) => {
  return (
    <ServicesContainer id={id}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <Title>My Services</Title>
      <ServiceGrid
        variants={containerVariants} // Added variants
        initial="hidden" // Added initial state
        animate="visible" // Added animate state
      >
        <ServiceCard variants={itemVariants}> {/* Added variants */}
          <CardIcon>💡</CardIcon>
          <CardTitle>AI & Machine Learning Solutions</CardTitle>
          <p>I build AI models that automate tasks and find hidden insights in your data.</p>
        </ServiceCard>
        <ServiceCard variants={itemVariants}> {/* Added variants */}
          <CardIcon>💻</CardIcon>
          <CardTitle>Full-Stack Web Applications</CardTitle>
          <p>I build fast and user-friendly websites and web applications, from start to finish.</p>
        </ServiceCard>
        <ServiceCard variants={itemVariants}> {/* Added variants */}
          <CardIcon>🖥️</CardIcon>
          <CardTitle>Custom Desktop Applications</CardTitle>
          <p>I create custom desktop software for Windows or macOS to improve your workflow.</p>
        </ServiceCard>
      </ServiceGrid>
    </ServicesContainer>
  );
};

// Add these variants definitions before the Services component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Stagger animation for children
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default Services;
