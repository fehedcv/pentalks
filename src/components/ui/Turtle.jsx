import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const Turtle = ({ scrollYProgress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();
    let turtleGroup = new THREE.Group(); 
    scene.add(turtleGroup);

    // Loading from your public/turtle folder
    mtlLoader.setPath('/turtle/');
    mtlLoader.load('model.mtl', (materials) => {
      materials.preload();
      objLoader.setMaterials(materials);
      objLoader.setPath('/turtle/');
      objLoader.load('model.obj', (object) => {
        // --- ALIGNMENT & SIZE ---
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center); // Centers the model
        
        // BIGGER SIZE: Adjust this scale if needed
        object.scale.set(0.25, 0.25, 0.25); 
        
        turtleGroup.add(object);
      });
    });

    scene.add(new THREE.AmbientLight(0xffffff, 2));
    const light = new THREE.DirectionalLight(0xffffff, 2.5);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      const elapsedTime = performance.now() * 0.001;
      
      if (turtleGroup) {
        // SCROLL LOGIC: turtle moves right and rotates toward the sea
        const progress = scrollYProgress.get();
        
        // Move from center (0) to right (3.5)
        turtleGroup.position.x = progress * 3.5; 
        
        // "Dive" effect - move further away/deeper as we scroll
        turtleGroup.position.z = progress * -2; 
        
        // Rotate slightly toward the sea
        turtleGroup.rotation.y = progress * (Math.PI / 3) + (Math.sin(elapsedTime * 0.5) * 0.1);
        
        // Constant gentle swimming
        turtleGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [scrollYProgress]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default Turtle;