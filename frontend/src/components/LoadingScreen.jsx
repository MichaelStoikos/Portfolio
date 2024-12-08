import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LoadingScreen({ onLoadingComplete }) {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onLoadingComplete
        });
      }
    });

    // Initial positions
    gsap.set([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      scale: 0,
      opacity: 0
    });

    // Animation sequence
    tl.to([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1
    })
    .to(circle1Ref.current, {
      x: -50,
      y: -50,
      duration: 1,
      ease: "power1.inOut",
      repeat: 2,
      yoyo: true
    }, 0)
    .to(circle2Ref.current, {
      x: 50,
      y: -50,
      duration: 1,
      ease: "power1.inOut",
      repeat: 2,
      yoyo: true
    }, 0)
    .to(circle3Ref.current, {
      x: -50,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
      repeat: 2,
      yoyo: true
    }, 0)
    .to(circle4Ref.current, {
      x: 50,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
      repeat: 2,
      yoyo: true
    }, 0)
    .to([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      x: 0,
      y: 0,
      scale: 0.5,
      duration: 0.5,
      ease: "power2.in"
    })
    .to([circle1Ref.current, circle2Ref.current, circle3Ref.current, circle4Ref.current], {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1
    });

    return () => tl.kill();
  }, [onLoadingComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary"
    >
      <div className="relative w-32 h-32">
        <div
          ref={circle1Ref}
          className="absolute w-8 h-8 bg-primary rounded-full left-0 top-0"
        />
        <div
          ref={circle2Ref}
          className="absolute w-8 h-8 bg-primary rounded-full right-0 top-0"
        />
        <div
          ref={circle3Ref}
          className="absolute w-8 h-8 bg-primary rounded-full left-0 bottom-0"
        />
        <div
          ref={circle4Ref}
          className="absolute w-8 h-8 bg-primary rounded-full right-0 bottom-0"
        />
      </div>
    </div>
  );
}