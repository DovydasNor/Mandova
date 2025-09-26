// Schema markup utility for structured data (JSON-LD)

// Type definitions for Schema.org structured data
interface BusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  alternateName: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  foundingDate: string;
  address: {
    "@type": string;
    addressCountry: string;
    addressLocality: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    email: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  hasOfferCatalog: object;
  areaServed: {
    "@type": string;
    name: string;
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface GalleryImage {
  filename: string;
  name: string;
  description: string;
}

export const generateBusinessSchema = (): BusinessSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mandova",
    "alternateName": "Mandova metalo konstrukcijos",
    "description": "Profesionalūs suvirinimo darbai ir metalo konstrukcijos pagal užsakymą. Kokybiškas metalo apdirbimas, konstrukcijų gamyba ir montavimas Lietuvoje.",
    "url": "https://mandova.lt",
    "logo": "https://mandova.lt/src/assets/Mandova_logo_trans.webp",
    "image": "https://mandova.lt/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LT",
      "addressLocality": "Lithuania"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+370-600-00000",
      "email": "info@mandova.lt",
      "contactType": "Customer Service",
      "availableLanguage": ["Lithuanian", "English"]
    },
    "sameAs": [
      "https://facebook.com/mandova",
      "https://instagram.com/mandova"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mandova Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suvirinimo darbai",
            "description": "Profesionalūs suvirinimo darbai visų tipų metalams"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Metalo konstrukcijos",
            "description": "Metalo konstrukcijų projektavimas ir gamyba pagal užsakymą"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Metalo apdirbimas",
            "description": "Tikslus metalo apdirbimas ir apdaila"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Lithuania"
    }
  };
};

export const generateWebsiteSchema = (): object => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mandova",
    "alternateName": "Mandova metalo konstrukcijos",
    "url": "https://mandova.lt",
    "description": "Profesionalūs suvirinimo darbai ir metalo konstrukcijos. Kokybė, tikslumas ir patikimumas.",
    "inLanguage": "lt-LT",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://mandova.lt/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mandova",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mandova.lt/src/assets/Mandova_logo_trans.webp"
      }
    }
  };
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]): object => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item: BreadcrumbItem, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateLocalBusinessSchema = (): object => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mandova",
    "image": "https://mandova.lt/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp",
    "description": "Profesionalūs suvirinimo darbai ir metalo konstrukcijos pagal užsakymą Lietuvoje.",
    "url": "https://mandova.lt",
    "telephone": "+370-600-00000",
    "email": "info@mandova.lt",
    "address": {
      "@type": "PostalAddress", 
      "addressCountry": "LT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.1694",
      "longitude": "23.8813"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": null,
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Metal Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Welding Services",
            "category": "Construction"
          }
        }
      ]
    }
  };
};

export const generateServiceSchema = (): object => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Metalo konstrukcijos ir suvirinimo paslaugos",
    "provider": {
      "@type": "Organization",
      "name": "Mandova",
      "url": "https://mandova.lt"
    },
    "description": "Profesionalūs suvirinimo darbai, metalo konstrukcijų gamyba ir montavimas. Kokybiškas metalo apdirbimas pagal individualius užsakymus.",
    "serviceType": "Construction Services",
    "areaServed": {
      "@type": "Country", 
      "name": "Lithuania"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mandova paslaugos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suvirinimo darbai",
            "description": "Profesionalūs suvirinimo darbai visų tipų metalams - plienas, nerūdijantis plienas, aliuminius"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Metalo konstrukcijos",
            "description": "Individualių metalo konstrukcijų projektavimas, gamyba ir montavimas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metalo apdirbimas", 
            "description": "Tikslus metalo apdirbimas, pjovimas, lenkimas ir formavimas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konstrukcijų montavimas",
            "description": "Profesionalus metalo konstrukcijų montavimas objekte"
          }
        }
      ]
    }
  };
};

export const generateImageGallerySchema = (images: GalleryImage[]): object => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Mandova metalo konstrukcijų galerija",
    "description": "Mandova atliktų suvirinimo darbų ir metalo konstrukcijų projektų galerija",
    "url": "https://mandova.lt/Gallery",
    "associatedMedia": images.map((image: GalleryImage) => ({
      "@type": "ImageObject",
      "url": `https://mandova.lt/src/assets/Gallery/${image.filename}`,
      "name": image.name,
      "description": image.description,
      "contentUrl": `https://mandova.lt/src/assets/Gallery/${image.filename}`,
      "width": "800",
      "height": "600",
      "encodingFormat": "image/webp"
    }))
  };
};