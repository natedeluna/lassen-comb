"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
        const scrollPosition = window.scrollY;
        const leftCards = showcaseRef.current.querySelector('.left-column');
        const rightCards = showcaseRef.current.querySelector('.right-column');

        if (leftCards) {
            const parallaxLeft = (scrollPosition - showcaseRef.current!.offsetTop) * (-0.001);
            leftCards.setAttribute('style', `transform: translateY(${parallaxLeft}px)`);
        }

        if (rightCards) {
            const parallaxRight = (scrollPosition - showcaseRef.current!.offsetTop) * (-0.115);
            rightCards.setAttribute('style', `transform: translateY(${parallaxRight}px)`);
        }
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
      style={{ width: windowWidth - 16, transform: 'translateX(-50%)', left: '50%' }}
      className={`fullWidthOverride relative ${className} flex gap-[5vw] justify-center items-center box-border max-w-[1000px]`}
    >
      <div className="left-column flex flex-col gap-[4vw] flex-1 ">
        <div className="card h-fit overflow-hidden ">
            <Image src={'/images/charlie.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%', margin: 'auto', scale: '.5'}} />
        </div>
        <div className="card h-fit overflow-hidden  ">
            <Image src={'/images/grid2.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%', }} />
        </div>
        <div className="card h-fit ">
            <Image src={'/images/logo_consulting_1.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%', scale: ''}} className=''/>
        </div>
        <div className='sm:hidden flex flex-col gap-2'>
          <div className="card h-fit overflow-hidden ">
              <Image src={'/images/tabs.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%'}} />
          </div>
          <div className="card h-fit overflow-hidden ">
            <video src="/images/Parchment - 22 April 2024.mp4" autoPlay loop muted playsInline
              style={{pointerEvents: 'none', touchAction:'none'}}
            ></video>
          </div>
          <div className="card h-fit overflow-hidden ">
          <Image src={'/images/parchment_ui.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%'}} />
          </div>
        </div>
      </div>

      <div className="right-column flex-col gap-[1vw] mt-12 flex-1 sm:flex hidden">
        <div className="card h-fit overflow-hidden  ">
            <Image src={'/images/tabs.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%'}} />
        </div>
        <div className="card h-fit overflow-hidden  ">
          <video src="/images/Parchment - 22 April 2024.mp4" autoPlay loop muted playsInline
            style={{pointerEvents: 'none', touchAction:'none'}}
          ></video>
        </div>
        <div className="card h-fit overflow-hidden ">
            <Image src={'/images/parchment_ui.png'} alt='' width={1000} height={1000} style={{width: '100%', height: '100%'}} />
        </div>
      </div>
    </div>
  );
};

export default ParallaxShowcase;