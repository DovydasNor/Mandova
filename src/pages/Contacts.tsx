import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';
import SchemaMarkup from '../components/SchemaMarkup';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '../utils/schemaMarkup';
import { motion } from 'framer-motion';
import { fadeInDown, staggerContainer, staggerItem, viewportScrollDown } from '../utils/animations';
import GoogleMap from '../components/GoogleMap';

const Contacts: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  usePageMeta({
    title: 'Kontaktai - Susisiekite su Mandova metalo konstrukcijų specialistais',
    description: 'Susisiekite su Mandova metalo konstrukcijų ir suvirinimo specialistais. Kreipkitės dėl konsultacijų, pasiūlymų ar projektų aptarimo. Profesionalūs sprendimai jūsų poreikiams.',
    keywords: 'Mandova kontaktai, metalo konstrukcijos kontaktai, suvirinimo paslaugos kontaktai, kreipkitės, konsultacijos',
    canonical: 'https://mandova.lt/Contacts',
    ogImage: 'https://mandova.lt/src/assets/partnership-handshake.webp',
    ogType: 'website'
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  const breadcrumbItems = [
    { name: 'Pagrindinis', url: 'https://mandova.lt/' },
    { name: 'Kontaktai', url: 'https://mandova.lt/Contacts' }
  ];

  return (
    <div id="kontaktai" className="min-h-screen relative" key={i18n.language}>
      <SchemaMarkup schema={generateLocalBusinessSchema()} id="local-business-schema" />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} id="breadcrumb-schema" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={fadeInDown}
          >
            <h1 className="text-4xl font-bold text-texts mb-6">
              {t('contacts.title')}
            </h1>
            <div className="w-24 h-1 bg-mandova mx-auto mb-8"></div>
            <h2 className="text-xl text-orange max-w-3xl mx-auto drop-shadow-[0_1.2px_1.2px_hex(0,0,0,0.8)]">
              {t('contacts.subtitle')}
            </h2>
          </motion.div>
          <motion.div 
            className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={staggerContainer}
          >
            <motion.div className="flex items-start space-x-6" variants={staggerItem}>
              <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-texts mb-2">{t('contacts.address_title')}</h3>
                <p className="text-lg text-orange">{t('contacts.address_line1')}</p>
                <p className="text-lg text-orange">{t('contacts.address_line2')}</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-6" variants={staggerItem}>
              <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div className='flex flex-col'>
                <h3 className="text-2xl font-semibold text-texts mb-2">{t('contacts.phone_title')}</h3>
                <a href='tel:+37062223642' className="text-xl text-orange font-medium">+370 622 23642</a>
                <a href='tel:+37065399915' className="text-xl text-orange font-medium">+370 653 99915</a>
              </div>
            </motion.div>
            <motion.div className="flex items-start space-x-6" variants={staggerItem}>
              <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-texts mb-2">{t('contacts.email_title')}</h3>
                <a href='mailto:info@mandova.lt' className="text-xl text-orange">info@mandova.lt</a>
                <p className="text-base text-orange">{t('contacts.email_note')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default Contacts;
