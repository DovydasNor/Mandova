import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Import all gallery images
import dazyklosKabykla from '../assets/Gallery/dazyklos kabykla.webp';
import dazyklosKabykla2 from '../assets/Gallery/dazyklos kabykla2.webp';
import dazyklosKabykla3 from '../assets/Gallery/dazyklos kabykla3.webp';
import letnykas1 from '../assets/Gallery/letnykas1.webp';
import letnykas2 from '../assets/Gallery/letnykas2.webp';
import nerza from '../assets/Gallery/nerza.webp';
import surenkamosLentynos1 from '../assets/Gallery/surenkamos lentynos1.webp';
import surenkamosLentynos2 from '../assets/Gallery/surenkamos lentynos2.webp';
import vartai from '../assets/Gallery/vartai.webp';
import vartai190 from '../assets/Gallery/vartai190.webp';
import vartai190_2 from '../assets/Gallery/vartai190_2.webp';

interface Photo {
  id: number;
  src: string;
  title: string;
  category: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

const PhotosGallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Gallery photos data with translation keys
  const photos: Photo[] = useMemo(() => [
    {
      id: 1,
      src: dazyklosKabykla,
      title: t('gallery.stalazas_dazyklai'),
      category: 'industrial',
      aspect: 'landscape'
    },
    {
      id: 2,
      src: dazyklosKabykla2,
      title: t('gallery.stalazas_dazyklai'),
      category: 'industrial',
      aspect: 'landscape'
    },
    {
      id: 3,
      src: dazyklosKabykla3,
      title: t('gallery.stalazas_dazyklai'),
      category: 'industrial',
      aspect: 'portrait'
    },
    {
      id: 4,
      src: letnykas1,
      title: t('gallery.aliuminis_ratas'),
      category: 'construction',
      aspect: 'landscape'
    },
    {
      id: 5,
      src: letnykas2,
      title: t('gallery.aliuminis_ratas'),
      category: 'construction',
      aspect: 'portrait'
    },
    {
      id: 6,
      src: nerza,
      title: t('gallery.nerudijancio_konstrukcija'),
      category: 'construction',
      aspect: 'landscape'
    },
    {
      id: 7,
      src: surenkamosLentynos1,
      title: t('gallery.surenkamos_lentynos'),
      category: 'furniture',
      aspect: 'portrait'
    },
    {
      id: 8,
      src: surenkamosLentynos2,
      title: t('gallery.surenkamos_lentynos'),
      category: 'furniture',
      aspect: 'landscape'
    },
    {
      id: 9,
      src: vartai,
      title: t('gallery.stumdomi_vartai'),
      category: 'gates',
      aspect: 'landscape'
    },
    {
      id: 10,
      src: vartai190,
      title: t('gallery.stumdomi_vartai'),
      category: 'gates',
      aspect: 'landscape'
    },
    {
      id: 11,
      src: vartai190_2,
      title: t('gallery.stumdomi_vartai'),
      category: 'gates',
      aspect: 'landscape'
    }
  ], [t]);

  // Navigation functions for lightbox
  const goToNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const goToPrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    const previousIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[previousIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
          const nextIndex = (currentIndex + 1) % photos.length;
          setSelectedPhoto(photos[nextIndex]);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          const currentIndexPrev = photos.findIndex(photo => photo.id === selectedPhoto.id);
          const previousIndex = (currentIndexPrev - 1 + photos.length) % photos.length;
          setSelectedPhoto(photos[previousIndex]);
          break;
        case 'Escape':
          e.preventDefault();
          setSelectedPhoto(null);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto, photos]);

  return (
    <div className="w-full">
      {/* Photo Grid */}
      <motion.div 
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        layout
      >
        <AnimatePresence mode="wait">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-lg bg-background"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={false}
                >
                  <div className="text-center text-white p-4">
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-orange transition-colors z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange transition-colors z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange transition-colors z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="max-w-4xl max-h-full w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <motion.div
                className="mt-4 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <div className="mt-2 text-sm text-gray-400">
                  {photos.findIndex(p => p.id === selectedPhoto.id) + 1} / {photos.length}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotosGallery;