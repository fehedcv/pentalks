import React from 'react';
import { Float, PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei';
import Turtle from './Turtle';
import Particles from './Particles';

const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -0.7, 3]} fov={40} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
      <directionalLight position={[-10, 5, -5]} intensity={1} color="#C47A3D" />
      <spotLight position={[0, 5, 0]} angle={0.5} penumbra={1} intensity={1.5} color="#FFD700" />
      
      <Environment preset="city" />

      {/* 3D Objects */}
      <Float
        speed={2} 
        rotationIntensity={0} 
        floatIntensity={0.6} 
        floatingRange={[-0.2, 0.2]}
      >
        <Turtle />
      </Float>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#C47A3D" />
      <Particles />
    </>
  );
};

export default Experience;