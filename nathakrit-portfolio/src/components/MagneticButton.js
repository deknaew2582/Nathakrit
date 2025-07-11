import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MagneticContainer = styled(motion.div)`
  display: inline-block;
  position: relative;
`;

const MagneticButton = ({ children, ...props }) => { // Added ...props
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 }); // Adjust multiplier for stronger/weaker effect
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <MagneticContainer
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      {...props} // Passed down props
    >
      {children}
    </MagneticContainer>
  );
};

export default MagneticButton;
