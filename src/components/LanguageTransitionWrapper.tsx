import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface LanguageTransitionWrapperProps {
  children: React.ReactNode;
}

const LanguageTransitionWrapper: React.FC<LanguageTransitionWrapperProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (newLang: string) => {
      if (newLang !== currentLang) {
        // Much shorter delay to avoid animation conflicts
        setTimeout(() => {
          setCurrentLang(newLang);
          
          // Force scroll-triggered animations to re-evaluate after language change
          setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
          }, 50);
        }, 100);
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, currentLang]);

  return (
    <motion.div
      key={currentLang}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default LanguageTransitionWrapper;