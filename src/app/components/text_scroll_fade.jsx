import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TextScrollFade = ({ text, triggerPoint }) => {
  const controls = useAnimation();
  const blurControls = useAnimation();
  const ref = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          });
        }
      },
      { rootMargin: triggerPoint }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, triggerPoint]);


  const lines = text.split('\n');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 5 }}
      animate={controls}
      className="px-5 sm:px-10"
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          ref={(el) => (linesRef.current[index] = el)}
          className="hero_1_title"
          animate={blurControls}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextScrollFade;