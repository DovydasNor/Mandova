import { useState, useEffect } from 'react';
import CircularGallery from '../components/CircularGallery';
import MobileGallery from '../components/MobileGallery';
import lines from '../assets/lines.webp';

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="pb-16 md:pb-20">
      <img 
        src={lines} 
        alt="Lines"
        className='absolute -top-10 right-0 w-full md:w-1/2 h-full object-cover -z-10 opacity-20'
      />
      <h1 className='text-texts text-center text-2xl md:text-4xl font-bold mb-8 md:mb-4'>Mūsų darbai</h1>
      
      {/* Conditional Rendering */}
      {isMobile ? (
        <div className="px-4">
          <MobileGallery />
        </div>
      ) : (
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      )}
    </div>
  )
}

export default Gallery