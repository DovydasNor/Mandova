import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { preloadCriticalImages } from './utils/imageOptimization';
import { measurePerformance, optimizeResourceLoading } from './utils/performance';
import { useTranslation } from 'react-i18next';
import { 
  LazyGallery, 
  LazyContacts, 
  LazyPrivacyPolicy, 
  LazyNotFoundPage,
  LazyComponentWrapper 
} from './utils/lazyComponents';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    preloadCriticalImages();
    optimizeResourceLoading();
  
    if (import.meta.env.DEV) {
      measurePerformance();
    }
  }, []);

  // Set HTML lang attribute on app load and language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language === 'lt' ? 'lt' : 'en';
  }, [i18n.language]);

  return (
    <div key={i18n.language}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" replace />} />
        <Route path="/Gallery" element={
          <LazyComponentWrapper>
            <LazyGallery />
          </LazyComponentWrapper>
        } />
        <Route path="/Contacts" element={
          <LazyComponentWrapper>
            <LazyContacts />
          </LazyComponentWrapper>
        } />
        <Route path="/privacy_policy" element={
          <LazyComponentWrapper>
            <LazyPrivacyPolicy />
          </LazyComponentWrapper>
        } />
        <Route path="*" element={
          <LazyComponentWrapper>
            <LazyNotFoundPage />
          </LazyComponentWrapper>
        } />
      </Routes>
      <BackToTopButton />
      <Footer />
    </div>
  )
}

export default App