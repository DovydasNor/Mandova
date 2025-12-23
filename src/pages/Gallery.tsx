import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PhotosGallery from '../components/photosGallery';
import { fadeInDown, viewportScrollDown } from '../utils/animations';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          viewport={viewportScrollDown}
          variants={fadeInDown}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-texts mb-30 mt-20">
            {t('gallery.title')}
          </h1>
        </motion.div>

        {/* Photos Gallery Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PhotosGallery />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="bg-orange hover:bg-texts text-texts hover:text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            whileHover={{ 
              y: -4,
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/Contacts">{t('contact_us')}</a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;