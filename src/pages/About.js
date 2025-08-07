import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';
import profileImage from '../profile.jpg';

const AboutContainer = styled.div`
  padding: 6rem 2rem;
  background-color: #0A192F;
  color: #E0E0E0;
  min-height: 100vh;
  position: relative; /* Establishes a stacking context */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevents background from spilling out */

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
  z-index: 0; /* Places background behind content */
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  z-index: 1; /* Ensures content is above the background */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const PhotoColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  border: 2px solid #64FFDA;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const TextColumn = styled.div`
  flex: 2;
  max-width: 700px;
  padding: 2rem;
  background-color: #0A192F;
  border-radius: 8px;
  border: 2px solid #64FFDA;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: left;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const About = ({ id }) => {
  return (
    <AboutContainer id={id}>
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <ContentContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>About Me</Title>
        <ContentWrapper>
          <PhotoColumn>
            <ProfileImage src={profileImage} alt="Nathakrit Chuajeen" />
          </PhotoColumn>
          <TextColumn>
            <Paragraph>
              From a young age, I've been fascinated by how technology can solve real-world problems. This curiosity led me to a degree in Computer Engineering from Khonkaen University and has been the driving force behind my 5-year career as a Software Engineer.
            </Paragraph>
            <Paragraph>
              Throughout my career, I've focused on one thing: using data to make systems smarter. I've been fortunate to be part of teams working on some really exciting projects that do exactly that. At CPF Food and Beverage, I contributed to building a complete defect detection system using a hyper-spectral camera and AI to automatically catch foreign objects on the production line – something that used to require human workers to do manually. I also helped develop a system that collected machine data every minute, which helped us identify bottlenecks and improve equipment effectiveness from just 20% to over 80% in a matter of days.
            </Paragraph>
            <Paragraph>
              Whether it's forecasting shrimp weight with regression models or building full-stack e-commerce platforms from scratch for freelance clients, my goal is always the same: to leverage my expertise in full-stack development and machine learning to build robust, intelligent, and impactful solutions.
            </Paragraph>
          </TextColumn>
        </ContentWrapper>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;