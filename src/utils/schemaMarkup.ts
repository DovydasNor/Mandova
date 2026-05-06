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
    "name": "Norvex",
    "alternateName": "Norvex aliuminio konstrukcijos",
    "description": "Norvex – profesionalūs aliuminio apdirbimo darbai, konstrukcijos pagal užsakymą. Kokybė, tikslumas ir patikimumas. Susisiekite.",
    "url": "https://norvex.lt",
    "logo": "https://norvex.lt/src/assets/VerticalWhite.png",
    "image": "https://norvex.lt/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LT",
      "addressLocality": "Lithuania"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+370-622-23642",
      "email": "info@norvex.lt",
      "contactType": "Customer Service",
      "availableLanguage": ["Lithuanian", "English"]
    },
    "sameAs": [
      "https://facebook.com/",
      "https://instagram.com/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Norvex Services",
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
    "name": "Norvex",
    "alternateName": "Norvex aliuminio konstrukcijos",
    "url": "https://norvex.lt",
    "description": "Norvex – profesionalūs aliuminio apdirbimo darbai, konstrukcijos pagal užsakymą. Kokybė, tikslumas ir patikimumas. Susisiekite.",
    "inLanguage": "lt-LT",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://norvex.lt/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Norvex",
      "logo": {
        "@type": "ImageObject",
        "url": "https://norvex.lt/src/assets/VerticalWhite.png"
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
    "name": "Norvex",
    "image": "https://norvex.lt/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp",
    "description": "Profesionalūs suvirinimo darbai ir metalo konstrukcijos pagal užsakymą Lietuvoje.",
    "url": "https://norvex.lt",
    "telephone": "+370-600-00000",
    "email": "info@norvex.lt",
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
      "name": "Norvex",
      "url": "https://norvex.lt"
    },
    "description": "Profesionalūs suvirinimo darbai, metalo konstrukcijų gamyba ir montavimas. Kokybiškas metalo apdirbimas pagal individualius užsakymus.",
    "serviceType": "Construction Services",
    "areaServed": {
      "@type": "Country", 
      "name": "Lithuania"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Norvex paslaugos",
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
    "url": "https://norvex.lt/Gallery",
    "associatedMedia": images.map((image: GalleryImage) => ({
      "@type": "ImageObject",
      "url": `https://norvex.lt/src/assets/Gallery/${image.filename}`,
      "name": image.name,
      "description": image.description,
      "contentUrl": `https://norvex.lt/src/assets/Gallery/${image.filename}`,
      "width": "800",
      "height": "600",
      "encodingFormat": "image/webp"
    }))
  };
};