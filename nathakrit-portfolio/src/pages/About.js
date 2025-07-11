import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Stars from '../components/Backgrounds/Stars';

const AboutContainer = styled.div`
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
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PhotoPlaceholder = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  height: 350px;
  background-color: #112240;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64FFDA;
  font-size: 1.5rem;
  text-align: center;
  border: 1px solid #64FFDA;
`;

const TextColumn = styled.div`
  flex: 2;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const About = ({ id }) => {
  return (
    <AboutContainer id={id}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <Title>About Me</Title>
      <ContentWrapper>
        <PhotoPlaceholder>
          [Placeholder for Professional Photo]
        </PhotoPlaceholder>
        <TextColumn>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </Paragraph>
        </TextColumn>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
