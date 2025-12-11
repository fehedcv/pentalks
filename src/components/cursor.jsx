import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use refs for values that change constantly to avoid re-renders
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const hoverState = useRef(false); // Ref to track hover inside the animation loop

  useEffect(() => {
    // Sync React state with ref
    hoverState.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsHovering(!!(target.closest('button') || target.closest('a') || target.closest('.hover-target')));
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    const animate = () => {
      // 1. Calculate the lag (Lerp)
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      pos.current.x += dx * 0.12;
      pos.current.y += dy * 0.12;

      // 2. Calculate Velocity for "Jelly" effect
      vel.current.x = dx * 0.12;
      vel.current.y = dy * 0.12;
      
      // Calculate rotation angle based on movement direction
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      // Calculate squeeze amount based on speed (clamped)
      const speed = Math.sqrt(dx*dx + dy*dy) * 0.12;
      const squeeze = Math.min(speed * 0.005, 0.4); // Limit distortion
      const scaleX = 1 + squeeze;
      const scaleY = 1 - squeeze;

      // 3. Apply Transforms
      if (cursor) {
        // If hovering, we ignore the jelly skew and just scale up
        if (hoverState.current) {
          cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(3.5)`;
        } else {
          // Normal movement with jelly skew
          cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
        }
      }
      requestAnimationFrame(animate);
    };

    const loop = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(loop);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block transition-colors duration-300 mix-blend-difference
        ${isHovering ? 'bg-[#C47A3D] mix-blend-multiply opacity-50' : 'border border-[#C47A3D] bg-transparent'}`} 
    />
  );
};

export default Cursor;