import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BodyScrollFade = ({ text }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          const triggerHeight = windowHeight * 0.67;
      
          if (top < triggerHeight) {
            controls.start('visible');
          }
        }
      };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  const heroLineVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroLineVariants}
      className=' hero_1_title my-10 px-10 sm:px-0'
    >
      {text}
    </motion.div>
  );
};

export default BodyScrollFade;