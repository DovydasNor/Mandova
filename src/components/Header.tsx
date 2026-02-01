import React, { useState } from 'react';
import mandovaLogo from '../assets/Mandova_logo_trans.webp';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToElement = (elementId: string, retries = 0): void => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (retries < 10) {
      setTimeout(() => scrollToElement(elementId, retries + 1), 200)
    }
  }

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToElement('apie')
      }, 100)
    } else {
      scrollToElement('apie')
    }
  }

  const handleReviewsClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/' && location.pathname !== '/Home') {
      window.localStorage.setItem('scrollToReviews', 'true');
      window.location.href = '/#reviews';
    } else {
      scrollToElement('reviews');
      if ((window as any).openReviewFormModal) (window as any).openReviewFormModal();
    }
  }

  const handleHomeClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/' && location.pathname !== '/Home') {
      window.location.href = '/';
    } else {
      navigate('/');
    }
  }

  return (
    <>
      <div className="hidden lg:flex items-center justify-between p-0.5 text-white relative">
        <button onClick={handleHomeClick} className="cursor-pointer">
          <div>
            <img 
              src={mandovaLogo} 
              alt="Logotipas"
              className="w-16 lg:w-48 absolute z-10 -top-6 lg:-top-8 left-6"
            />
          </div>
        </button>

        <div className="flex items-center gap-6">
          <ul className="flex gap-3 lg:gap-5 space-x-2 lg:space-x-4 p-6 lg:p-8 list-none">
            <li>
              <a
                href="#apie"
                onClick={handleAboutClick}
                className="hover:text-orange transition-colors cursor-pointer text-texts text-lg lg:text-xl font-medium scroll-smooth">
                {t('header.about')}
              </a>
            </li>
            <li>
              <NavLink
                to="/Gallery"
                className="hover:text-orange transition-colors cursor-pointer text-texts text-lg lg:text-xl font-medium">
                {t('header.gallery')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contacts"
                className="hover:text-orange transition-colors cursor-pointer text-texts text-lg lg:text-xl font-medium">
                {t('header.contacts')}
              </NavLink>
            </li>
            {/* <li>
              <a
                href="#reviews"
                onClick={handleReviewsClick}
                className="hover:text-orange transition-colors cursor-pointer text-texts text-lg lg:text-xl font-medium">
                {t('header.reviews')}
              </a>
            </li> */}
          </ul>
          
          <LanguageSwitcher />
        </div>
      </div>

      <div className="lg:hidden relative">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleHomeClick} className="cursor-pointer">
            <img 
              src={mandovaLogo} 
              alt="Logotipas"
              className="h-16 w-auto"
            />
          </button>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-texts p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute top-full left-0 right-0 bg-background z-50 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <nav className="px-4 py-4">
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <a
                      href="#apie"
                      onClick={handleAboutClick}
                      className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                      {t('header.about')}
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <NavLink
                      to="/Gallery"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                      {t('header.gallery')}
                    </NavLink>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <NavLink
                      to="/Contacts"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                      {t('header.contacts')}
                    </NavLink>
                  </motion.li>
                  {/* <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <a
                      href="#reviews"
                      onClick={handleReviewsClick}
                      className="hover:text-orange transition-colors cursor-pointer text-texts text-lg lg:text-xl font-medium">
                      {t('header.reviews')}
                    </a>
                  </motion.li> */}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Header