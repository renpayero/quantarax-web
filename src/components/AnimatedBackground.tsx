"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #0f172a 30%, #1e293b 50%, #0f172a 70%, #020617 100%)',
        }}
      />
      
      {/* Mouse follower glow effect */}
      {isHovering && (
        <div 
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.15) 0%, rgba(6, 182, 212, 0.08) 30%, transparent 70%)',
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}
      
      {/* Animated orbs - smooth floating motion */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full animate-orb-float-1"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.25) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full animate-orb-float-2"
        style={{
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] rounded-full animate-orb-pulse -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 82, 204, 0.15) 0%, transparent 60%)',
        }}
      />
      
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(2, 6, 23, 0.4) 100%)',
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
