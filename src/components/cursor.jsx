import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;

    const moveCursor = (e) => { mouseX = e.clientX; mouseY = e.clientY; };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;
      cursorX = cursorX + distX * 0.15;
      cursorY = cursorY + distY * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${isHovering ? 3.5 : 1})`;
      }
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsHovering(!!(target.closest('button') || target.closest('a') || target.closest('.hover-target')));
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHovering]);

  return (
    <div ref={cursorRef} className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference transition-colors duration-300 ${isHovering ? 'bg-[#C47A3D] opacity-50 mix-blend-multiply border-none' : 'border border-[#C47A3D] bg-transparent'}`} />
  );
};

export default Cursor;