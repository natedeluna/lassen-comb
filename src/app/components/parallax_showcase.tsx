"use client";
import React, { useState, useEffect, useRef } from 'react';

interface ParallaxShowcaseProps {
  className?: string;
}

const ParallaxShowcase: React.FC<ParallaxShowcaseProps> = ({ className }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      if (showcaseRef.current) {
        const scrollPosition = window.pageYOffset;
        const cards = showcaseRef.current.querySelectorAll('.card');

        cards.forEach((card, index) => {
          const parallaxEffect = (scrollPosition - showcaseRef.current!.offsetTop) * (0.1 * (index + 1));
          card.setAttribute('style', `transform: translateY(${parallaxEffect}px)`);
          if (index == 3) {
              console.log(parallaxEffect)
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={showcaseRef}
      style={{ width: windowWidth, transform: 'translateX(-50%)', left: '50%' }}
      className={`fullWidthOverride relative ${className} h-[800px] flex gap-1 justify-center items-center`}
    >
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="card w-[400px] h-[200px]  bg-white shadow-lg rounded-lg flex justify-center items-center text-2xl font-bold"
        >
          Card {index}
        </div>
      ))}
    </div>
  );
};

export default ParallaxShowcase;