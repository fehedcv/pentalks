import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = () => {
  const count = 50;
  const positions = new Float32Array(count * 3);
  const meshRef = useRef();

  // Create random positions
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  // Slow rotation animation
  useFrame((state) => {
    if(meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#C47A3D" transparent opacity={0.4} sizeAttenuation={true} />
    </points>
  );
};

export default Particles;