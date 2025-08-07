import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cubes = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.x += delta * 0.2;
    groupRef.current.rotation.y += delta * 0.3;
  });

  const cubes = [];
  const numCubes = 50;
  for (let i = 0; i < numCubes; i++) {
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    const scale = Math.random() * 0.5 + 0.1;
    cubes.push(
      <Box key={i} position={position} args={[scale, scale, scale]}>
        <meshBasicMaterial color="#64FFDA" wireframe />
      </Box>
    );
  }

  return (
    <group ref={groupRef}>
      {cubes}
    </group>
  );
};

export default Cubes;
