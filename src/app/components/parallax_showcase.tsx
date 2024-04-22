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
          const parallaxEffect = (scrollPosition - showcaseRef.current!.offsetTop) * (0.01 * (index + 1));
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
    <div ref={showcaseRef} style={{ width: windowWidth, transform: 'translateX(-50%)', left: '50%' }} className={`fullWidthOverride relative ${className} h-[1000px] flex gap-8 justify-center items-center`}>
        <div className="flex flex-col gap-4 flex-1">
        <div className="h-fit rounded-[28px] overflow-hidden border-slate-200 border-[.1px] shadow-sm bg-gray-300"></div>
        <div className="h-fit rounded-[28px] overflow-hidden border-slate-200 border-[.1px] shadow-sm bg-gray-300"></div>
        <div className="h-fit rounded-[28px] overflow-hidden border-slate-200 border-[.1px] shadow-sm bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4 mt-12 flex-1">
        <div className="h-fit rounded-[28px] overflow-hidden border-slate-200 border-[.1px] shadow-sm bg-gray-300"></div>
        <div className="h-fit rounded-[28px] overflow-hidden border-slate-200 border-[.1px] shadow-sm bg-gray-300">
            <video src="/images/Parchment - 22 April 2024.mp4" autoPlay loop muted></video>
        </div>
        </div>
    </div>
  );
};

export default ParallaxShowcase;