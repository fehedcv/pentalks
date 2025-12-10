import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- The Interactive Turtle Component ---
const Turtle = (props) => {
  const bodyRef = useRef();
  const headRef = useRef();
  
  // Initial position for the "Rise from Depths" animation
  // [x, y, z] -> Starts low (-6) and slightly back (-2)
  const startPos = new THREE.Vector3(0, -6, -2);
  const targetPos = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.position.copy(startPos);
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (bodyRef.current && headRef.current) {
      
      // --- 1. ENTRANCE ANIMATION (Rise from Depths) ---
      // We linearly interpolate (lerp) the current position to the target (0,0,0)
      // 0.03 is the speed factor (lower = heavier/slower movement)
      bodyRef.current.position.lerp(targetPos, 0.03);

      // --- 2. HEAD TRACKING ---
      // Standard mouse tracking
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 1.5, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 1.0, 0.1);

      // --- 3. BODY MOVEMENT ---
      // Body follows mouse slower
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, mouseX * 0.5, 0.05);
      bodyRef.current.rotation.x = THREE.MathUtils.lerp(bodyRef.current.rotation.x, -mouseY * 0.3, 0.05);

      // Banking (Roll) + Idle Swim Wave
      const targetRoll = (-mouseX * 0.2) + (Math.sin(t / 2) * 0.05);
      bodyRef.current.rotation.z = THREE.MathUtils.lerp(bodyRef.current.rotation.z, targetRoll, 0.05);
    }
  });

  const materialProps = {
    color: "#C47A3D",
    roughness: 0.2,
    metalness: 0.8,
  };
  
  const skinMaterialProps = {
    color: "#2a2a2a",
    roughness: 0.5,
    metalness: 0.2,
  };

  return (
    <group ref={bodyRef} {...props} dispose={null}>
      {/* --- BODY PARTS --- */}
      
      {/* THE SHELL */}
      <mesh position={[0, 0.4, 0]} scale={[1.4, 0.8, 1.6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...materialProps} envMapIntensity={1} />
      </mesh>
      
      {/* THE BELLY */}
      <mesh position={[0, 0.1, 0]} scale={[1.3, 0.2, 1.5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.5} />
      </mesh>

      {/* --- THE HEAD GROUP --- */}
      <group ref={headRef} position={[0, 0.4, 1.5]}>
          <mesh position={[0, 0.1, 0.3]}> 
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial {...skinMaterialProps} />
          </mesh>
          
          <group position={[0, 0.1, 0.3]}>
            {/* Left Eye */}
            <mesh position={[0.22, 0.1, 0.35]}>
                <sphereGeometry args={[0.08]} />
                <meshBasicMaterial color="white" />
                <mesh position={[0, 0, 0.06]}>
                    <sphereGeometry args={[0.04]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </mesh>
            {/* Right Eye */}
            <mesh position={[-0.22, 0.1, 0.35]}>
                <sphereGeometry args={[0.08]} />
                <meshBasicMaterial color="white" />
                <mesh position={[0, 0, 0.06]}>
                    <sphereGeometry args={[0.04]} />
                    <meshBasicMaterial color="black" />
                </mesh>
            </mesh>
          </group>
      </group>

      {/* --- FLIPPERS --- */}
      <mesh position={[1, 0.2, 1]} rotation={[0.5, 0.5, -0.2]} scale={[0.8, 0.1, 0.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...skinMaterialProps} />
      </mesh>
      <mesh position={[-1, 0.2, 1]} rotation={[0.5, -0.5, 0.2]} scale={[0.8, 0.1, 0.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...skinMaterialProps} />
      </mesh>
      <mesh position={[1, 0.2, -1]} rotation={[-0.5, 0.5, -0.2]} scale={[0.6, 0.1, 0.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...skinMaterialProps} />
      </mesh>
      <mesh position={[-1, 0.2, -1]} rotation={[-0.5, -0.5, 0.2]} scale={[0.6, 0.1, 0.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...skinMaterialProps} />
      </mesh>
    </group>
  );
};

// --- Scene Setup ---
const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" castShadow />
      <spotLight position={[-5, 5, 5]} angle={0.5} penumbra={1} intensity={1} color="#C47A3D" />
      
      <Environment preset="city" />

      <Float
        speed={2} 
        rotationIntensity={0} 
        floatIntensity={0.6} 
        floatingRange={[-0.2, 0.2]}
      >
        <Turtle />
      </Float>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#C47A3D" />
      <BackgroundParticles />
    </>
  );
};

const BackgroundParticles = () => {
  const count = 40;
  const positions = new Float32Array(count * 3);
  const meshRef = useRef();

  useFrame((state) => {
      if(meshRef.current) {
          meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      }
  })

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12;
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#C47A3D" transparent opacity={0.3} sizeAttenuation={true} />
    </points>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 pt-20 relative overflow-hidden bg-[#FAF7F2]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20 pointer-events-none">
          <div className="font-syne font-bold text-[12vw] lg:text-[9vw] leading-[0.85] text-[#0a0a0a] tracking-tighter">
            <div className="overflow-hidden">
              <span className={`inline-block transition-transform duration-1000 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                DIGITAL
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`inline-block text-[#C47A3D] transition-transform duration-1000 delay-100 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                STORIES
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`inline-block transition-transform duration-1000 delay-200 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                FORGED.
              </span>
            </div>
          </div>
          
          <div className={`mt-12 flex flex-col items-start transition-all duration-1000 delay-500 pointer-events-auto ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-[#333333] max-w-md text-lg leading-relaxed mb-8">
              Pentalks is a creative collective blending aesthetics with strategy. We build brands that speak louder than words.
            </p>
            <button className="group bg-[#C47A3D] text-[#FAF7F2] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#A8652F] transition-colors duration-300 hover-target cursor-pointer">
              Start a Project 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right 3D Content */}
        {/* The canvas here does NOT have eventSource, so it defaults to this div */}
        <div className={`hidden lg:block lg:col-span-5 relative h-[80vh] w-full transition-opacity duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 w-full h-full cursor-move">
            <Canvas dpr={[1, 2]} shadows>
               <Experience />
            </Canvas>
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 right-[-10%] w-[50vw] h-[50vw] bg-[#E5E5E5] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none z-0" />
    </section>
  );
};

export default Hero;