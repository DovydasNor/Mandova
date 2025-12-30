import React from 'react';
import lines from '../assets/lines.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInDown, staggerContainer, staggerItem, viewportScrollDown } from '../utils/animations';

// Animated Network Background Component
const AnimatedNetwork: React.FC = () => {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Connection Lines */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 25) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={node.x}
                  y1={node.y}
                  x2={otherNode.x}
                  y2={otherNode.y}
                  stroke="#975a24"
                  strokeWidth="0.1"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    pathLength: 1
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: node.delay
                  }}
                />
              );
            }
            return null;
          })
        )}
        
        {/* Animated Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="0.3"
            fill="#975a24"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: node.delay
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="paslaugos" className='my-16 relative'>
      <div>
        <img 
          src={lines}
          alt={t('services.lines_alt')}
          className='absolute inset-0 w-230 object-cover -z-10 -top-40 -left-50 opacity-20'/>
      </div>
      
      {/* Animated Network Background */}
      <AnimatedNetwork />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            key={i18n.language}
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={fadeInDown}
          >
            <h2 className="text-3xl font-bold text-texts mb-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"> 
                <span>{t('services.title')}</span>
              </div>
            </h2>
            <div className="w-20 h-1 bg-mandova mx-auto mb-4"></div>
            <p className="text-orange text-xl max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-orange text-center group p-6 rounded-lg" 
              style={{ touchAction: 'manipulation' }}
              variants={staggerItem}
              whileHover={{ 
                y: -12,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(139, 69, 19, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg 
                  className="w-8 h-8 text-mandova" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </motion.svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card1.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card1.desc')}
              </p>
            </motion.div>
            <motion.div 
              className="bg-orange text-center group p-6 rounded-lg" 
              style={{ touchAction: 'manipulation' }}
              variants={staggerItem}
              whileHover={{ 
                y: -12,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(139, 69, 19, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg 
                  className="w-8 h-8 text-mandova" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </motion.svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card2.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card2.desc')}
              </p>
            </motion.div>
            <motion.div 
              className="bg-orange text-center group p-6 rounded-lg" 
              style={{ touchAction: 'manipulation' }}
              variants={staggerItem}
              whileHover={{ 
                y: -12,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(139, 69, 19, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg 
                  className="w-8 h-8 text-mandova" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </motion.svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card3.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card3.desc')}
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={viewportScrollDown}
            variants={fadeInDown}
          >
            <p className="text-orange text-xl mb-6">{t('services.consultation')}</p>
            <motion.button 
              className="cursor-pointer bg-orange hover:bg-texts text-2xl text-texts hover:text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ 
                y: -4,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/Contacts">{t('contact_us')}</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
