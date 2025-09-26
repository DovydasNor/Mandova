import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CircularGallery from '../components/CircularGallery';
import MobileGallery from '../components/MobileGallery';
import lines from '../assets/lines.webp';
import { usePageMeta } from '../hooks/usePageMeta';
import SchemaMarkup from '../components/SchemaMarkup';
import { generateBreadcrumbSchema, generateImageGallerySchema } from '../utils/schemaMarkup';
import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, scaleIn } from '../utils/animations';

const Gallery: React.FC = () => {
  const { i18n } = useTranslation();
  
  usePageMeta({
    title: 'Galerija - Mandova metalo konstrukcijų projektai ir darbai',
    description: 'Peržiūrėkite Mandova atliktų suvirinimo darbų ir metalo konstrukcijų galeriją. Mūsų projektų pavyzdžiai, kokybės standartai ir profesionalių sprendimų demonstracija.',
    keywords: 'metalo konstrukcijų galerija, suvirinimo darbų pavyzdžiai, Mandova projektai, metalo gaminiai, konstrukcijų galerija',
    canonical: 'https://mandova.lt/Gallery',
    ogImage: 'https://mandova.lt/src/assets/Gallery/vartai.webp',
    ogType: 'website'
  });

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { t } = useTranslation();

  const breadcrumbItems = [
    { name: 'Pagrindinis', url: 'https://mandova.lt/' },
    { name: 'Galerija', url: 'https://mandova.lt/Gallery' }
  ];

  const galleryImages = [
    { filename: 'vartai.webp', name: 'Metalo vartai', description: 'Profesionalūs metalo vartai pagal užsakymą' },
    { filename: 'surenkamos lentynos1.webp', name: 'Surenkamos lentynos', description: 'Metalinės surenkamos lentynos sandėliavimui' },
    { filename: 'dazyklos kabykla.webp', name: 'Dažyklos kabykla', description: 'Metalo konstrukcijos dažyklos įrangai' },
    { filename: 'letnykas1.webp', name: 'Lietnykas', description: 'Metalinis lietnykas su kokybišku suvirinimo darbu' },
    { filename: 'nerza.webp', name: 'Nerūdijančio plieno gaminiai', description: 'Tikslūs nerūdijančio plieno apdirbimo darbai' }
  ];

  return (
    <motion.div 
      key={i18n.language}
      className="pb-16 md:pb-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} id="breadcrumb-schema" />
      <SchemaMarkup schema={generateImageGallerySchema(galleryImages)} id="gallery-schema" />
      <motion.img 
        src={lines} 
        alt={t('gallery.lines_alt')}
        className='absolute -top-10 right-0 w-full md:w-1/2 h-full object-cover -z-10 opacity-20'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      <motion.h1 
        className='text-texts text-center text-2xl md:text-4xl font-bold mb-8 md:mb-4'
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {t('gallery.title')}
      </motion.h1>
      {isMobileOrTablet ? (
        <motion.div 
          className="px-4"
          initial="initial"
          animate="animate"
          variants={scaleIn}
        >
          <MobileGallery />
        </motion.div>
      ) : (
        <motion.div 
          style={{ height: '600px', position: 'relative' }}
          initial="initial"
          animate="animate"
          variants={scaleIn}
        >
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Gallery