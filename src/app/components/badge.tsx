"use client"

import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
interface BadgeProps {
    texts: string[];
    color: string;
}

const Badge: React.FC<BadgeProps> = ({ texts, color }) => {
    const [index, setIndex] = useState(0);
    const [badgeWidth, setBadgeWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [texts]);

    return (
        <motion.div style={{ backgroundColor: color, }}
            className='flex flex-col items-center justify-center rounded-full px-2 py-1 border my-2 text-sm '
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
            <AnimatePresence mode='wait'>
                <motion.span
                    key={texts[index]}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring',bounce: .05, stiffness: 450, damping: 30}}
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </motion.div>
    );
};

export default Badge;