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
  z-index: 0;
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #64FFDA;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ServiceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  align-items: stretch; /* Ensures all grid items in a row have the same height */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

// A styled-component for STATIC styles only
const ServiceCardWrapper = styled.div`
  background-color: #1B3B6F; /* Much lighter, more distinct background */
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  height: 100%; /* Make the card fill the grid cell height */
  box-sizing: border-box; /* Include padding in height calculation */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #64FFDA;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }
`;

const CardDescription = styled.p`
  color: #CCCCCC;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// A single service card component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.7), 0 0 20px #64FFDA",
      }}
      transition={{ duration: 0.3 }}
      style={{ height: '100%' }} // Ensure the motion div stretches
    >
      <ServiceCardWrapper>
        <CardIcon>{icon}</CardIcon>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </ServiceCardWrapper>
    </motion.div>
  );
};

const Services = ({ id }) => {
  return (
    <ServicesContainer id={id}>
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <ContentContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>My Services</Title>
        <ServiceGrid variants={containerVariants} initial="hidden" animate="visible">
          <ServiceCard
            icon="💡"
            title="AI & Machine Learning Solutions"
            description="I build AI models that automate tasks and find hidden insights in your data."
          />
          <ServiceCard
            icon="💻"
            title="Full-Stack Web Applications"
            description="I build fast and user-friendly websites and web applications, from start to finish."
          />
          <ServiceCard
            icon="🖥️"
            title="Custom Desktop Applications"
            description="I create custom desktop software for Windows or Linux to improve your workflow."
          />
        </ServiceGrid>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default Services;