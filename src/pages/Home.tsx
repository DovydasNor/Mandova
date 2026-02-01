import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import { useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import SchemaMarkup from "../components/SchemaMarkup";
import { generateBusinessSchema, generateWebsiteSchema, generateServiceSchema } from "../utils/schemaMarkup";
import { useTranslation } from "react-i18next";
import GoogleMap from "../components/GoogleMap";

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  
  usePageMeta({
    title: 'Mandova - Metalo konstrukcijos ir suvirinimo paslaugos Lietuvoje',
    description: 'Mandova – profesionalūs suvirinimo darbai, metalo konstrukcijos pagal užsakymą. Kokybiškas metalo apdirbimas, konstrukcijų gamyba ir montavimas. Susisiekite su mumis jau šiandien.',
    keywords: 'suvirinimo darbai, metalo konstrukcijos, metalo apdirbimas, suvirinimas, konstrukcijų gamyba, Mandova, Lietuva',
    canonical: 'https://mandova.lt/',
    ogImage: 'https://mandova.lt/src/assets/welding-work-with-metal-construction-busy-metal-factory.webp',
    ogType: 'website'
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const scrollTo = location.state.scrollTo;
      // For reviews, wait a bit longer to ensure the Shapo widget is loaded
      const delay = scrollTo === 'reviews' ? 800 : 200;
      
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);
    }
  }, [location.state]);

  return (
    <div key={i18n.language}>
      <SchemaMarkup schema={generateBusinessSchema()} id="business-schema" />
      <SchemaMarkup schema={generateWebsiteSchema()} id="website-schema" />
      <SchemaMarkup schema={generateServiceSchema()} id="service-schema" />
      <Hero />
      <Services />
      <AboutUs />
      <GoogleMap />
    </div>
  )
}

export default Home