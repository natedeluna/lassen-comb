"use client"

import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
    isMobile: boolean;
    texts: string[];
    initialWidth: number;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({ isMobile, texts, initialWidth, className }) => {
    const [index, setIndex] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(initialWidth);
    const previousIndex = index === 0 ? texts.length - 1 : index - 1;
    
    useEffect(() => {
        const interval = setInterval(() => {
            changeBadgeText()
        }, 6000);
        return () => clearInterval(interval);
    }, [index]);

    const changeBadgeText = () => {
        // Granular approach since framer motion is finnicky on mobile
        const measureSpan = document.getElementById(`measure${texts[0]}`);
        const opacityTransitionPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 300)
        })

        const textSwapPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 350)
        })

        if (measureSpan && texts.length > 1) {
            measureSpan.style.opacity = '0';
            opacityTransitionPromise.then(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                measureSpan.textContent = texts[previousIndex]
                const width:any = parseFloat(window.getComputedStyle(measureSpan).width);
                setBadgeWidth(width+28);
                textSwapPromise.then(() => {
                    measureSpan.style.opacity = '1'
                })
            })
        }
      };

      const scrollToPriceCard = () => {
        const priceCard = document.getElementById('price-card');
        if (priceCard) {
          const priceCardRect = priceCard.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = priceCardRect.top + scrollTop;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      };

    return (
        <div className={`relative w-fit h-fit ${className}`}>
            <motion.div style={{ 
                width: `${badgeWidth}px`,
                boxShadow: `#f5d0fe 0px -1.6px 0px 1px inset`,
                transition: `background .4s ease-out, border .3s ease-out`
            }}
                onClick={() => scrollToPriceCard()}
                className={`
                    relative 
                    ${isMobile? "bg-fuchsia-100":"bg-fuchsia-50"}
                    ${isMobile? "active:bg-fuchsia-100":"active:bg-fuchsia-100"}
                    ${isMobile? "active:border-fuchsia-600":"active:border-fuchsia-400"}
                    ${isMobile? "border-fuchsia-500":"border-fuchsia-200"}
                    border-[.5px]
                    rounded-2xl
                    py-1
                    h-[30px] 
                    my-3 
                    text-sm 
                    transition-width 
                    duration-500 
                    ease-in-out
                    transition-opacity 
                    text-nowrap 
                    cursor-pointer
                    select-none
                    `}
                layout
                transition={{ type: 'spring', stiffness: 900, damping: 23 }}
                >
            </motion.div>
            <div id={`measure${texts[0]}`} 
                    className='text-fuchsia-400 pointer-events-none'
                    style={{
                        position: 'absolute',
                        top:'50%',
                        left: '50%',
                        transform: 'translate(-50%, -52%)',
                        whiteSpace: 'pre', 
                        fontFamily: 'Haskoy-med', 
                        fontSize: '14px', 
                        transition: 'opacity .3s ease-out'}}>
                    {texts[0]}
            </div>
        </div>
    );
};

export default Badge;