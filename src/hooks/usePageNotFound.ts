// Custom hook to handle 404 SEO properly
import { useEffect } from 'react';

export const usePageNotFound = (pageTitle: string): void => {
  useEffect(() => {

    document.title = pageTitle;
    
    const robotsMeta = document.createElement('meta') as HTMLMetaElement;
    robotsMeta.name = 'robots';
    robotsMeta.content = 'noindex, nofollow';
    robotsMeta.id = 'page-not-found-robots';
    document.head.appendChild(robotsMeta);

    const canonicalMeta = document.createElement('link') as HTMLLinkElement;
    canonicalMeta.rel = 'canonical';
    canonicalMeta.href = window.location.href;
    canonicalMeta.id = 'page-not-found-canonical';
    document.head.appendChild(canonicalMeta);

    return () => {

      const robotsMetaToRemove = document.getElementById('page-not-found-robots');
      const canonicalToRemove = document.getElementById('page-not-found-canonical');
      
      if (robotsMetaToRemove) robotsMetaToRemove.remove();
      if (canonicalToRemove) canonicalToRemove.remove();
      
      document.title = 'Mandova - Metalo konstrukcijos ir suvirinimo paslaugos';
    };
  }, [pageTitle]);
};