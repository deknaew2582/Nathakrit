import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #64FFDA;
  transform-origin: 0%;
  z-index: 2000;
  pointer-events: none; /* Add this line */
`;

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    setScrollProgress((scrolled / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProgressBar
      style={{ scaleX: scrollProgress / 100 }}
    />
  );
};

export default ScrollIndicator;