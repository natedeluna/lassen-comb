"use client"

import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface BadgeProps {
    texts: string[];
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ texts, color }) => {
    const [index, setIndex] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(texts[index].length * 8);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(texts[index].length)
            const previousIndex = index === 0 ? texts.length - 1 : index - 1;
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            
            setTimeout(() => {
                setBadgeWidth(8 * texts[previousIndex].length);
            }, 250);
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <motion.div style={{ width: `${badgeWidth}px` }}
            className='relative flex flex-col bg-stone-50 border-stone-500 text-stone-900 items-center justify-center rounded-full px-3 py-1 border h-[30px]  my-2 text-sm transition-width duration-500 ease-in-out transition-opacity text-nowrap '
            layout
            transition={{ type: 'spring', stiffness: 800, damping: 35 }}
            >
            <AnimatePresence mode='out-in'>
                {texts.map ((text, i) => (
                    <motion.span 
                        className='absolute text-stone-900'
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
        </motion.div>
    );
};

export default Badge;