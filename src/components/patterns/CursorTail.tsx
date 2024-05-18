"use client"

import React, { useEffect, useRef } from 'react';
import '@/assets/css/CursorTail.css';

interface CursorTailType {
  children: React.ReactNode
}

const CursorTail = ({ children }: CursorTailType) => {
  const cursorTailRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      if (cursorTailRef.current) {
        cursorTailRef.current.classList.add('visible');
      }
    };

    const handleMouseOut = () => {
      if (cursorTailRef.current) {
        cursorTailRef.current.classList.remove('visible');
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const xPos = event.clientX - rect.left;
        const yPos = event.clientY - rect.top;

        setTimeout(() => {
          if (cursorTailRef.current) {
            cursorTailRef.current.style.left = `${xPos - 75}px`;
            cursorTailRef.current.style.top = `${yPos - 75}px`;
          }
        }, 50);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mouseout', handleMouseOut);
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Create stars
    const numStars = 100;
    if (container) {
      for (let i = 0; i < numStars; i++) {
        createStar(container);
      }
    }

    function createStar(container: HTMLElement) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseover', handleMouseOver);
        container.removeEventListener('mouseout', handleMouseOut);
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="cursor-tail-container" ref={containerRef}>
      <div id="cursor-tail" ref={cursorTailRef}></div>
      {children}
    </div>
  );
};

export default CursorTail;