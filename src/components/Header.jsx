import mandovaLogo from '../assets/Mandova_logo_trans.webp';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToElement = (elementId, retries = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (retries < 10) {
      setTimeout(() => scrollToElement(elementId, retries + 1), 200)
    }
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    if (location.pathname !== '/' && location.pathname !== '/Home') {
      navigate('/')
      setTimeout(() => {
        scrollToElement('apie')
      }, 100)
    } else {
      scrollToElement('apie')
    }
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="hidden lg:flex items-center justify-around p-0.5 text-white relative">
        <NavLink to="/Home">
          <div>
            <img 
              src={mandovaLogo} 
              alt="Logotipas"
              className="w-60 lg:w-80 absolute z-10 -top-12 lg:-top-16 left-6"
            />
          </div>
        </NavLink>

        <div className="text-orange font-bold text-lg lg:text-xl">
          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        </div>

        <div>
          <LanguageSwitcher />
        </div>

        <div>
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
          </ul>
        </div>
      </div>

      <div className="lg:hidden relative">
        <div className="flex items-center justify-between px-4 py-4">
          <NavLink to="/Home">
            <img 
              src={mandovaLogo} 
              alt="Logotipas"
              className="h-30 w-auto"
            />
          </NavLink>

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

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 shadow-lg bg-background z-50 opacity-100 transform translate-y-0 transition-all duration-300 ease-in-out">
            <nav className="px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#apie"
                    onClick={handleAboutClick}
                    className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                    {t('header.about')}
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/Gallery"
                    onClick={handleNavClick}
                    className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                    {t('header.gallery')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contacts"
                    onClick={handleNavClick}
                    className="block py-2 hover:text-orange transition-colors cursor-pointer text-texts text-lg font-medium">
                    {t('header.contacts')}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}

export default Header