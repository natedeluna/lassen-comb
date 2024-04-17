"use client"

import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface BadgeProps {
    isMobile: boolean;
    texts: string[];
}

const Badge: React.FC<BadgeProps> = ({ isMobile, texts }) => {
    const [index, setIndex] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(172);
    const previousIndex = index === 0 ? texts.length - 1 : index - 1;
    const baseColor:string = "lime"
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            changeBadgeText()
        }, 7000);
        return () => clearInterval(interval);
    }, [index]);

    const changeBadgeText = () => {
        // Granular approach since framer motion is finnicky on mobile
        const measureSpan = document.getElementById('measure');
        const opacityTransitionPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 320)
        })
        if (measureSpan) {
            measureSpan.style.opacity = '0';
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            measureSpan.textContent = texts[previousIndex]

            opacityTransitionPromise.then(() => {
                const width:any = parseFloat(window.getComputedStyle(measureSpan).width);
                setBadgeWidth(width+24);
                measureSpan.style.opacity = '1'
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
        <motion.div style={{ 
            width: `${badgeWidth}px`,
            boxShadow: `inset 0px -1.5px 0 1px #d9f99d`,
            transition: `background .4s ease-out, border .3s ease-out`
        }}
            onClick={() => scrollToPriceCard()}
            className={`
                relative 
                flex 
                flex-col 
                ${isMobile? "bg-lime-100":"bg-lime-50"}
                ${isMobile? "active:bg-lime-100":"active:bg-lime-100"}
                ${isMobile? "active:border-lime-600":"active:border-lime-400"}
                ${isMobile? "border-lime-400":"border-lime-300"}
                border-[.5px]
                rounded-2xl
                items-center 
                justify-center 
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
            transition={{ type: 'spring', stiffness: 900, damping: 25 }}
            >
            <AnimatePresence >
                {texts.map ((text, i) => (
                    <motion.span 
                        className='transition active:text-lime-900 absolute text-lime-700 text-[13px] font-[555] transform translate-y-[-.5px]'
                        key={text}
                        initial={{ opacity: 0}}
                        animate={{ opacity: i===index ? 1 : 0}}
                        exit={{ opacity: 0, }}
                        transition={{stiffness: 800, damping: 30, delay: i === index ? 0.28 : 0}}
                    >
                            {text}
                    </motion.span>
                ))}
            </AnimatePresence>
            <span id="measure" style={{visibility: 'hidden', whiteSpace: 'pre', fontFamily: 'Haskoy', fontSize: '14px', transition: 'opacity .3s ease-out'}}>
                {texts[0]}
            </span>
        </motion.div>
    );
};

export default Badge;