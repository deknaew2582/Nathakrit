import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Waves = () => {
  const meshRef = useRef();

  // Store initial positions to avoid accumulating changes
  const initialPositions = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    return new Float32Array(geometry.attributes.position.array);
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;

      for (let i = 0; i < initialPositions.length; i += 3) {
        const x = initialPositions[i];
        const y = initialPositions[i + 1];

        const waveX = Math.sin(x * 0.5 + time) * 0.1;
        const waveY = Math.cos(y * 0.5 + time) * 0.1;

        positions[i + 2] = waveX + waveY; // Update the Z component
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshBasicMaterial color="#64FFDA" wireframe />
    </mesh>
  );
};

export default Waves;
