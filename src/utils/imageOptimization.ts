
interface CriticalImage {
  src: string;
  alt: string;
  priority: string;
}


export interface OptimizedImage {
  src: string;
  width: number;
  height: number;
  format: string;
}

export interface GalleryImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
}

type ImageSize = 'sm' | 'md' | 'lg' | 'xl';

export const CRITICAL_IMAGES: CriticalImage[] = [
 
  {
    src: '/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp',
    alt: 'Mandova suvirinimo darbai metalo gamykloje',
    priority: 'high'
  },
  {
    src: '/src/assets/Mandova_logo_trans.webp', 
    alt: 'Mandova logotipas',
    priority: 'high'
  }
];

export const OPTIMIZED_IMAGES = {
  
  hero: {
    src: '/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp',
    width: 1920,
    height: 1080,
    format: 'webp'
  },
  

  expertise: {
    src: '/src/assets/expertise.webp',
    width: 400,
    height: 400,
    format: 'webp'
  },
  diploma: {
    src: '/src/assets/diploma.webp', 
    width: 400,
    height: 400,
    format: 'webp'
  },
  drilling: {
    src: '/src/assets/drilling-machine.webp',
    width: 400,
    height: 400, 
    format: 'webp'
  },
  
  
  handshake: {
    src: '/src/assets/partnership-handshake.webp',
    width: 600,
    height: 400,
    format: 'webp'
  },
  idea: {
    src: '/src/assets/idea.webp',
    width: 600,
    height: 400,
    format: 'webp'
  },
  
  
  gallery: [
    {
      src: '/src/assets/Gallery/vartai.webp',
      alt: 'Profesionalūs metalo vartai pagal užsakymą',
      width: 800,
      height: 600
    },
    {
      src: '/src/assets/Gallery/surenkamos lentynos1.webp', 
      alt: 'Metalinės surenkamos lentynos sandėliavimui',
      width: 800,
      height: 600
    }
    
  ]
};

export const preloadCriticalImages = (): void => {
  CRITICAL_IMAGES.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image.src;
    if (image.priority === 'high') {
      link.fetchPriority = 'high';
    }
    document.head.appendChild(link);
  });
};


export const getOptimalImageSize = (screenWidth: number): ImageSize => {
  if (screenWidth < 640) return 'sm';  // Mobile
  if (screenWidth < 1024) return 'md'; // Tablet  
  if (screenWidth < 1920) return 'lg'; // Desktop
  return 'xl'; // Large desktop
};


export const supportsWebP = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};