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

const Heading = styled.h1`
  font-size: 3rem;
  color: #64FFDA;
  margin-bottom: 2rem;
`;

const EmailLink = styled.a`
  font-size: 1.5rem;
  color: #0A192F;
  background-color: #64FFDA;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4CAF9D;
    color: #FFFFFF;
  }
`;

const CallToAction = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Contact = ({ id }) => {
  return (
    <ContactContainer id={id}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundCanvas>
        <Stars />
      </BackgroundCanvas>
      <Heading>Let's build something great together.</Heading>
      <EmailLink href="mailto:nathakrit.cha@gmail.com">
        nathakrit.cha@gmail.com
      </EmailLink>
      <CallToAction>
        Feel free to reach out for project inquiries or collaborations.
      </CallToAction>
    </ContactContainer>
  );
};

export default Contact;
