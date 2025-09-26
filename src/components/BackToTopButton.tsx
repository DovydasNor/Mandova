
import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-orange text-background rounded-full p-3 shadow-lg hover:bg-mandova-dark transition-all duration-500 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    );
}

export default BackToTopButton