import React from 'react';
import certificate from '../assets/diploma.webp';
import experience from '../assets/expertise.webp';
import quality from '../assets/quality-medal-svgrepo-com.svg';
import drilling_machine from '../assets/drilling-machine.webp';
import handshake from '../assets/partnership-handshake.webp';
import idea from '../assets/idea.webp';
import lines from '../assets/lines.webp';
import LazyImage from './LazyImage';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInDown, staggerContainer, viewportScrollDown } from '../utils/animations';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const scrollToContact = () => {
    document.getElementById('kontaktai')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="apie" className="mb-16 relative" key={i18n.language}>
      {/* Geometric Network Background - Right Side */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-20">
        <img 
          src={lines}
          alt="Geometric Network Pattern" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={fadeInDown}
          >
            <h2 className="text-4xl font-bold text-texts mb-4">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-mandova mx-auto mb-6"></div>
            <p className="text-xl text-orange max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={viewportScrollDown}
              variants={fadeInDown}
            >
              <h3 className="text-2xl font-semibold text-texts mb-4">
                {t('about.professionalism_title')}
              </h3>
              <p className="text-orange leading-relaxed">
                {t('about.professionalism_desc1')}
              </p>
              <p className="text-orange leading-relaxed">
                {t('about.professionalism_desc2')}
              </p>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial="initial"
              whileInView="animate"
              viewport={viewportScrollDown}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center space-x-3" variants={fadeInDown}>
                <div className="w-2 h-2 bg-mandova rounded-full"></div>
                <img src={experience} alt={t('about.experience_alt')} className="w-10 h-10" />
                <span className="text-texts">{t('about.experience')}</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={fadeInDown}>
                <div className="w-2 h-2 bg-mandova rounded-full"></div>
                <img src={certificate} alt={t('about.certificate_alt')} className="w-10 h-10" />
                <span className="text-texts">{t('about.certificate')}</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={fadeInDown}>
                <div className="w-2 h-2 bg-mandova rounded-full"></div>
                <img src={drilling_machine} alt={t('about.machines_alt')} className="w-10 h-10" />
                <span className="text-texts">{t('about.machines')}</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" variants={fadeInDown}>
                <div className="w-2 h-2 bg-mandova rounded-full"></div>
                <img src={quality} alt={t('about.quality_alt')} className="w-10 h-10" />
                <span className="text-texts">{t('about.quality')}</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={staggerContainer}
          >
            <motion.div className="text-center" variants={fadeInDown}>
              <div className="w-20 h-20 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LazyImage 
                  src={quality} 
                  alt={t('about.quality_alt')} 
                  className='w-12 h-12' 
                  placeholder={<div className="w-12 h-12 bg-gray-200 animate-pulse"></div>}
                />
              </div>
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.quality_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.quality_card_desc')}
              </p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInDown}>
              <div className="w-20 h-20 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LazyImage 
                  src={handshake} 
                  alt={t('about.reliability_alt')} 
                  className='w-12 h-12' 
                  placeholder={<div className="w-12 h-12 bg-gray-200 animate-pulse"></div>}
                />
              </div>
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.reliability_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.reliability_card_desc')}
              </p>
            </motion.div>
            <motion.div className="text-center" variants={fadeInDown}>
              <div className="w-20 h-20 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LazyImage 
                  src={idea} 
                  alt={t('about.innovation_alt')} 
                  className='w-12 h-12' 
                  placeholder={<div className="w-12 h-12 bg-gray-200 animate-pulse"></div>}
                />
              </div>
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.innovation_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.innovation_card_desc')}
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={fadeInDown}
          >
          </motion.div>

            <motion.div 
              className="mt-12 text-center"
              initial="initial"
              whileInView="animate"
              viewport={viewportScrollDown}
              variants={fadeInDown}
            >
              <motion.button 
                className="cursor-pointer bg-orange hover:bg-texts text-2xl text-texts hover:text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                whileHover={{ 
                y: -4,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/Contacts" onClick={() => window.scrollTo(0, 0)}>{t('contact_us')}</Link>
              </motion.button>
              </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;