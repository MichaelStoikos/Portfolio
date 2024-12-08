import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export function AnimatedLogo() {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const containerRef = useRef(null);

  const playAnimation = () => {
    const tl = gsap.timeline();
    
    tl.to([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      x: 0,
      y: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  const resetAnimation = () => {
    gsap.to([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div className='flex flex-row text-slate-50 justify-center items-center'
    onMouseEnter={playAnimation}
        onMouseLeave={resetAnimation} >
            <Link 
        to="/"
        className="relative w-12 h-12 flex items-center justify-center"
        
        ref={containerRef}
        >
        <div
            ref={circle1Ref}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ left: '20%', top: '20%' }}
        />
        <div
            ref={circle2Ref}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ right: '20%', top: '20%' }}
        />
        <div
            ref={circle3Ref}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ left: '20%', bottom: '20%' }}
        />
        <div
            ref={circle4Ref}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ right: '20%', bottom: '20%' }}
        />
        </Link>
        <Link to="/">
            <h1 className='text-primary text-3xl font-bold'>MY.PROJECTS</h1>
        </Link>
    </div>
    
  );
}