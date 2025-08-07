import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0A192F;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: #64FFDA;
  font-size: 3rem;
  font-weight: bold;
`;

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          // Add a small delay before setting loading to false to allow the 100% to be seen
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <PreloaderContainer
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {progress}%
            </motion.span>
          </PreloaderContainer>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
};

export default Preloader;