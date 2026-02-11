import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';
import SchemaMarkup from '../components/SchemaMarkup';
import { generateServiceSchema, generateBreadcrumbSchema } from '../utils/schemaMarkup';
import { motion } from 'framer-motion';
import { fadeInDown, staggerContainer, staggerItem } from '../utils/animations';
import './B2B.css';

const B2B: React.FC = () => {
const location = useLocation();
const { t, i18n } = useTranslation();

  usePageMeta({
    title: i18n.language === 'lt' 
      ? 'B2B partnerystė - Metalo konstrukcijos verslui | Mandova'
      : 'B2B Partnership - Metal Constructions for Business | Mandova',
    description: i18n.language === 'lt'
      ? 'Mandova siūlo B2B metalo konstrukcijų sprendimus verslui. Didmeninės paslaugos, ilgalaikės partnerystės, individualūs projektai pramonės įmonėms.'
      : 'Mandova offers B2B metal construction solutions for businesses. Wholesale services, long-term partnerships, custom projects for industrial companies.',
    keywords: i18n.language === 'lt'
      ? 'B2B metalo konstrukcijos, verslo partnerystė, didmeninės paslaugos, pramonės projektai, metalo apdirbimas verslui'
      : 'B2B metal construction, business partnership, wholesale services, industrial projects, metal processing for business',
    canonical: 'https://mandova.lt/B2B',
    ogImage: 'https://mandova.lt/src/assets/business-partnership.webp',
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

  const businessSchema = generateServiceSchema();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('header.home'), url: 'https://mandova.lt/' },
    { name: t('header.b2b'), url: 'https://mandova.lt/B2B' }
  ]);

  return (
    <>
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      <main className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="hero-section b2b-hero"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.div className="hero-content" variants={fadeInDown}>
              <h1 className="hero-title">{t('b2b.hero.title')}</h1>
              <p className="hero-subtitle">{t('b2b.hero.subtitle')}</p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('b2b.hero.years_experience')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{t('b2b.hero.completed_projects')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">{t('b2b.hero.support')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="services-section"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.div className="section-header" variants={fadeInDown}>
              <h2>{t('b2b.services.title')}</h2>
              <p>{t('b2b.services.subtitle')}</p>
            </motion.div>
            
            <div className="services-grid">
              <motion.div className="service-card" variants={staggerItem}>
                <div className="service-icon">🏭</div>
                <h3>{t('b2b.services.industrial.title')}</h3>
                <p>{t('b2b.services.industrial.description')}</p>
                <ul className="service-features">
                  <li>{t('b2b.services.industrial.feature1')}</li>
                  <li>{t('b2b.services.industrial.feature2')}</li>
                  <li>{t('b2b.services.industrial.feature3')}</li>
                </ul>
              </motion.div>

              <motion.div className="service-card" variants={staggerItem}>
                <div className="service-icon">⚙️</div>
                <h3>{t('b2b.services.manufacturing.title')}</h3>
                <p>{t('b2b.services.manufacturing.description')}</p>
                <ul className="service-features">
                  <li>{t('b2b.services.manufacturing.feature1')}</li>
                  <li>{t('b2b.services.manufacturing.feature2')}</li>
                  <li>{t('b2b.services.manufacturing.feature3')}</li>
                </ul>
              </motion.div>

              <motion.div className="service-card" variants={staggerItem}>
                <div className="service-icon">🤝</div>
                <h3>{t('b2b.services.partnership.title')}</h3>
                <p>{t('b2b.services.partnership.description')}</p>
                <ul className="service-features">
                  <li>{t('b2b.services.partnership.feature1')}</li>
                  <li>{t('b2b.services.partnership.feature2')}</li>
                  <li>{t('b2b.services.partnership.feature3')}</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Partner Benefits Section */}
        <motion.section 
          className="benefits-section"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <div className="container">
            <motion.div className="section-header" variants={fadeInDown}>
              <h2>{t('b2b.benefits.title')}</h2>
              <p>{t('b2b.benefits.subtitle')}</p>
            </motion.div>
            
            <div className="benefits-grid">
              <motion.div className="benefit-item" variants={staggerItem}>
                <div className="benefit-icon">💰</div>
                <h3>{t('b2b.benefits.cost.title')}</h3>
                <p>{t('b2b.benefits.cost.description')}</p>
              </motion.div>

              <motion.div className="benefit-item" variants={staggerItem}>
                <div className="benefit-icon">🎯</div>
                <h3>{t('b2b.benefits.quality.title')}</h3>
                <p>{t('b2b.benefits.quality.description')}</p>
              </motion.div>

              <motion.div className="benefit-item" variants={staggerItem}>
                <div className="benefit-icon">⚡</div>
                <h3>{t('b2b.benefits.speed.title')}</h3>
                <p>{t('b2b.benefits.speed.description')}</p>
              </motion.div>

              <motion.div className="benefit-item" variants={staggerItem}>
                <div className="benefit-icon">🛡️</div>
                <h3>{t('b2b.benefits.reliability.title')}</h3>
                <p>{t('b2b.benefits.reliability.description')}</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="cta-section"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDown}
          viewport={{ once: true }}
        >
          <div className="container">
            <div className="cta-content">
              <h2>{t('b2b.cta.title')}</h2>
              <p>{t('b2b.cta.subtitle')}</p>
              <div className="cta-buttons">
                <a href="/Contacts" className="btn btn-primary">
                  {t('b2b.cta.contact_button')}
                </a>
                <a href="tel:+37060123456" className="btn btn-secondary">
                  {t('b2b.cta.call_button')}
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default B2B;