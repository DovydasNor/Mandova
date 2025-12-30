import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/welding-work-with-metal-construction-busy-metal-factory.webp';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInLeft, viewportOnce } from '../utils/animations';
import { Phone, Mail, MapPin, Zap, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div key={i18n.language}>
      {/* Mobile Hero */}
      <motion.div 
        className="block sm:hidden relative min-h-[45vh] w-full overflow-hidden"
        initial="initial"
        animate="animate"
        viewport={viewportOnce}
      >
        <motion.img 
          src={hero} 
          alt={t('hero.image_alt')}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-40 scale-105"
          variants={fadeInLeft}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange/60 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: -50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="relative z-10 flex items-center justify-center h-full px-6 py-16"
          variants={fadeInUp}
        >
          <div className="text-center text-white max-w-sm">
            <motion.h1 
              className="text-3xl font-bold mb-4 text-white leading-tight"
              variants={fadeInDown}
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.h2 
              className="text-lg font-semibold text-orange leading-tight mb-6"
              variants={fadeInUp}
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}
            >
              {t('hero.subtitle')}
            </motion.h2>

            {/* Contact info for mobile */}
            <motion.div 
              className="space-y-2 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 text-white/90">
                <Mail className="w-4 h-4 text-orange" />
                <span>info@mandova.lt</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Desktop Hero */}
      <motion.div 
        className="hidden sm:block relative h-[80vh] lg:h-[85vh] w-full overflow-hidden"
        initial="initial"
        animate="animate"
        viewport={viewportOnce}
      >
        <motion.img 
          src={hero} 
          alt={t('hero.image_alt')} 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-45 scale-105"
          loading='eager'
          fetchPriority='high'
          decoding='async'
          variants={fadeInLeft}
          style={{
            transform: `translateY(${scrollY * 0.5}px)` // Parallax effect
          }}
        />
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange/40 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: -50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Stats overlay */}
        <motion.div 
          className="absolute top-8 right-8 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: Award, value: "2+", label: t('about.years_experience') },
            { icon: Shield, value: "100%", label: t('about.quality') },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center min-w-[120px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
            >
              <stat.icon className="w-6 h-6 text-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-20"
          variants={fadeInUp}
        >
          <div className="text-left text-white max-w-4xl">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-white leading-tight"
              variants={fadeInDown}
              style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.4)'
              }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.h2 
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-orange leading-relaxed mb-8"
              variants={fadeInUp}
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {t('hero.subtitle')}
            </motion.h2>
            
            {/* Contact info row */}
            <motion.div 
              className="flex flex-wrap gap-6 mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange" />
                <span className="text-lg">info@mandova.lt</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange" />
                <span className="text-lg">Šiauliai, Lietuva</span>
              </div>
            </motion.div>
            
            {/* Enhanced call to action */}
            <motion.div
              variants={fadeInUp}
              className="pt-4"
            >
              <Link 
                to="/Contacts"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-orange/20"
              >
                <Zap className="w-5 h-5" />
                {t('services.consultation')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Enhanced decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        
        {/* Animated border line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/80 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;