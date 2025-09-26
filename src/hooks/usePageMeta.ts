// Custom hook to manage dynamic meta tags for SEO and Social Media
import { useEffect } from 'react';

interface PageMetaOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const usePageMeta = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image' 
}: PageMetaOptions): void => {
  useEffect(() => {
    
    if (title) {
      document.title = title;
    }

    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta') as HTMLMetaElement;
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta') as HTMLMetaElement;
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link') as HTMLLinkElement;
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    
    const updateOGMeta = (property: string, content: string | undefined): void => {
      if (!content) return;
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (ogMeta) {
        ogMeta.setAttribute('content', content);
      } else {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        ogMeta.setAttribute('content', content);
        document.head.appendChild(ogMeta);
      }
    };

    
    const updateTwitterMeta = (name: string, content: string | undefined): void => {
      if (!content) return;
      let twitterMeta = document.querySelector(`meta[name="${name}"]`);
      if (twitterMeta) {
        twitterMeta.setAttribute('content', content);
      } else {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', name);
        twitterMeta.setAttribute('content', content);
        document.head.appendChild(twitterMeta);
      }
    };

    
    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:type', ogType);
    updateOGMeta('og:url', canonical || window.location.href);
    updateOGMeta('og:site_name', 'Mandova');
    updateOGMeta('og:locale', 'lt_LT');
    if (ogImage) {
      updateOGMeta('og:image', ogImage);
      updateOGMeta('og:image:alt', `${title} - Mandova`);
    }

    
    updateTwitterMeta('twitter:card', twitterCard);
    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    if (ogImage) {
      updateTwitterMeta('twitter:image', ogImage);
    }

  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard]);
};