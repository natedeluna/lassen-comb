import { motion } from 'framer-motion';


const HeroFadeIn = () => {
    const heroLineVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
        },
    }),
    };

  return (
    <>
      <motion.div
        className="hero_1_title inline sm:hidden"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={heroLineVariants} >
            Elevate
      </motion.div>

      <motion.div
        className="hero_1_title"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={heroLineVariants} >
            <span className='hero_1_title hidden sm:inline'>Elevate</span> your brand with
      </motion.div>

      <motion.div
        className="hero_1_title"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={heroLineVariants}
      >
        world class design
      </motion.div>
    </>
  );
};

export default HeroFadeIn;