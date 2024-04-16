"use client"

import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface BadgeProps {
    texts: string[];
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ texts, color }) => {
    const [index, setIndex] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(172);
    const previousIndex = index === 0 ? texts.length - 1 : index - 1;
    const baseColor:string = "lime"
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            changeBadgeText()
        }, 12000);
        return () => clearInterval(interval);
    }, [index]);

    const changeBadgeText = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        const measureSpan = document.getElementById('measure');
        if (measureSpan) {
            const width:any = parseFloat(window.getComputedStyle(measureSpan).width);
            setTimeout(() => {
                setBadgeWidth(width+24);
            }, 250);
        }
      };

    return (
        <motion.div style={{ 
            width: `${badgeWidth}px`,
            boxShadow: `inset 0px -1.5px 0 1px #d9f99d`,
        }}
            onClick={() => changeBadgeText()}
            className='
                relative 
                flex 
                flex-col 
                bg-lime-50
                border-lime-300 
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
                text-nowrap '
            layout
            transition={{ type: 'spring', stiffness: 800, damping: 35 }}
            >
            <AnimatePresence mode='out-in'>
                {texts.map ((text, i) => (
                    <motion.span 
                        className='absolute text-lime-700 text-[13px] font-[555] transform translate-y-[-.5px]'
                        key={text}
                        initial={{ opacity: 0}}
                        animate={{ opacity: i===index ? 1 : 0}}
                        exit={{ opacity: 0, }}
                        transition={{stiffness: 800, damping: 30, delay: i === index ? 0.25 : 0}}
                    >
                            {text}
                    </motion.span>
                ))}
            </AnimatePresence>
            <span id="measure" style={{visibility: 'hidden', whiteSpace: 'pre', fontFamily: 'Haskoy', fontSize: '14px'}}>
                {texts[previousIndex]}
            </span>
        </motion.div>
    );
};

export default Badge;