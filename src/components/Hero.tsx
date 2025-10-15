import React from 'react';
import hero from '../assets/welding-work-with-metal-construction-busy-metal-factory.webp';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInLeft, viewportOnce } from '../utils/animations';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div key={i18n.language}>
      <motion.div 
        className="block sm:hidden w-full pt-8 px-4"
        initial="initial"
        animate="animate"
        viewport={viewportOnce}
      >
        <motion.div 
          className="text-center text-white max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-2xl font-bold mb-4 drop-shadow-lg text-texts leading-tight"
            variants={fadeInDown}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.h2 
            className="text-xl font-bold drop-shadow-md text-orange leading-tight"
            variants={fadeInUp}
          >
            {t('hero.subtitle')}
          </motion.h2>
        </motion.div>
        <motion.div
          variants={fadeInUp}
        >
          <img 
            src={hero} 
            alt={t('hero.image_alt')}
            className='w-full object-center mt-4 brightness-35 sepia'
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="hidden sm:block relative h-64 md:h-80 lg:h-96 w-full overflow-hidden"
        initial="initial"
        animate="animate"
        viewport={viewportOnce}
      >
        <motion.img 
          src={hero} 
          alt={t('hero.image_alt')} 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-35 sepia"
          loading='eager'
          fetchPriority='high'
          decoding='async'
          variants={fadeInLeft}
        />
        <motion.div 
          className="text-orange font-bold text-sm md:text-base lg:text-lg xl:text-xl z-30 absolute top-4 right-3 md:right-4 lg:right-6"
          variants={fadeInDown}
        >

        </motion.div>
        <div className="absolute inset-0"></div>
        <motion.div 
          className="relative z-10 flex items-center justify-center h-full px-3 md:px-4"
          variants={fadeInUp}
        >
          <div className="text-center text-white max-w-4xl">
            <motion.h1 
              className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 drop-shadow-lg text-texts leading-tight"
              variants={fadeInDown}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.h2 
              className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-orange leading-tight"
              variants={fadeInUp}
            >
              {t('hero.subtitle')}
            </motion.h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;