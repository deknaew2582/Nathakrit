import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';

const Grid = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });

  const lines = [];
  const size = 10;
  const divisions = 20;
  const step = size / divisions;

  for (let i = -divisions / 2; i <= divisions / 2; i++) {
    lines.push(
      <Line
        key={`x-${i}`}
        points={[[i * step, -size / 2, 0], [i * step, size / 2, 0]]}
        color="#64FFDA"
        lineWidth={0.5}
      />
    );
    lines.push(
      <Line
        key={`y-${i}`}
        points={[[ -size / 2, i * step, 0], [size / 2, i * step, 0]]}
        color="#64FFDA"
        lineWidth={0.5}
      />
    );
  }

  return (
    <group ref={ref} position={[0, 0, -5]}>
      {lines}
    </group>
  );
};

export default Grid;
