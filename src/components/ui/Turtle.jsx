import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

const Turtle = (props) => {
  const meshRef = useRef();
  
  // --- 1. Load Resources ---
  // We use useLoader to handle the async loading of the MTL and OBJ
  const materials = useLoader(MTLLoader, '/turtle/model.mtl');
  
  const obj = useLoader(OBJLoader, '/turtle/model.obj', (loader) => {
    // This tells the OBJ loader to use the materials we just loaded
    materials.preload();
    loader.setMaterials(materials);
  });

  // --- 2. Scene Preparation ---
  // Clone the scene so we can reuse it without caching errors
  const scene = useMemo(() => {
    const clone = obj.clone();
    
    // 3ds Max Export Fixes:
    // Traverse the model to fix shadows and materials
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Enhance the material realism
        if (child.material) {
          // Reduce the shininess defined in the MTL (Ns 27 is often too glossy)
          child.material.roughness = 0.6; 
          child.material.metalness = 0.1;
          
          // Ensure the texture looks correct
          if (child.material.map) {
            child.material.map.encoding = THREE.sRGBEncoding;
          }
        }
      }
    });
    return clone;
  }, [obj]);

  // --- 3. Animation Logic ---
  const startPos = new THREE.Vector3(0, -8, -5); 
  const targetPos = new THREE.Vector3(0, -1, 0); 

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.copy(startPos);
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (meshRef.current) {
      // A. Entrance (Swim up from deep)
      meshRef.current.position.lerp(targetPos, 0.02);

      // B. Rotation Logic (Whole body movement)
      // Note: We are rotating the GROUP, not the internal mesh
      
      // Look Left/Right
      const targetRotationY = mouseX * 0.4;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);

      // Look Up/Down
      const targetRotationX = -mouseY * 0.2; 
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);

      // Bank/Roll (Swim tilt)
      const targetRoll = (-mouseX * 0.2) + (Math.sin(t / 2) * 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRoll, 0.05);
    }
  });

  return (
    <group ref={meshRef} {...props} dispose={null}>
      {/* 3ds Max Correction: 
        rotation={[-Math.PI / 2, 0, 0]} fixes the "standing on tail" issue.
        rotation={[0, Math.PI, 0]} might be needed if it faces backwards.
        
        Adjust 'scale' if the turtle is too huge or too tiny.
      */}
      <primitive 
        object={scene} 
        scale={0.08} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
    </group>
  );
};

export default Turtle;