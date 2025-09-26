
import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '../hooks/usePageMeta';
import SchemaMarkup from '../components/SchemaMarkup';
import { generateBreadcrumbSchema } from '../utils/schemaMarkup';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  usePageMeta({
    title: 'Privatumo politika - Mandova duomenų apsauga ir privatumas',
    description: 'Mandova privatumo politika - sužinokite, kaip renkame, naudojame ir saugome jūsų asmens duomenis. BDAR atitikties informacija ir jūsų teisės.',
    keywords: 'privatumo politika, duomenų apsauga, BDAR, asmens duomenų tvarkymas, Mandova',
    canonical: 'https://mandova.lt/privacy_policy',
    ogImage: 'https://mandova.lt/src/assets/Mandova_logo_trans.webp',
    ogType: 'article'
  });

  const breadcrumbItems = [
    { name: 'Pagrindinis', url: 'https://mandova.lt/' },
    { name: 'Privatumo politika', url: 'https://mandova.lt/privacy_policy' }
  ];

  return (
    <div className="privacy-policy-container text-xl text-white" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} id="breadcrumb-schema" />
      <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
      <p>{t('privacy.intro')}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.contacts_title')}</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacy.email')}: <a href="mailto:info@mandova.lt" className="underline">info@mandova.lt</a></li>
        <li>{t('privacy.phone')}: (+370) 622 23642</li>
        <li>{t('privacy.address')}: J. Basanavičiaus g. 144a LT-76128 Šiauliai</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.data_title')}</h2>
      <p>{t('privacy.data_intro')}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.third_party_title')}</h2>
      <p>{t('privacy.third_party_intro')} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">{t('privacy.google_policy')}</a>.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.social_title')}</h2>
      <p>{t('privacy.social_intro')}</p>
      <ul className="list-disc ml-6 mb-4">
        <li><a href="https://www.facebook.com/MBmandova" target="_blank" rel="noopener noreferrer" className="underline">Facebook</a></li>
        <li><a href="https://www.instagram.com/mbmandova/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a></li>
        <li><a href="https://www.tiktok.com/@mbmandova" target="_blank" rel="noopener noreferrer" className="underline">TikTok</a></li>
      </ul>
      <p>{t('privacy.social_details')}</p>
      <p>{t('privacy.social_joint')}</p>
      <p>{t('privacy.social_recommend')}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.processing_title')}</h2>
      <p>{t('privacy.processing_law')}</p>
      <p>{t('privacy.processing_principles')}</p>
      <p>{t('privacy.processing_security')}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.rights_title')}</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>{t('privacy.rights_info')}</li>
        <li>{t('privacy.rights_correct')}</li>
        <li>{t('privacy.rights_delete')}</li>
        <li>{t('privacy.rights_limit')}</li>
        <li>{t('privacy.rights_port')}</li>
        <li>{t('privacy.rights_object')}</li>
        <li>{t('privacy.rights_withdraw')}</li>
      </ul>
      <p>{t('privacy.rights_how')}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.complaints_title')}</h2>
      <p>{t('privacy.complaints_intro')}</p>
      <p>{t('privacy.complaints_next')} <a href="https://vdai.lrv.lt" target="_blank" rel="noopener noreferrer" className="underline">{t('privacy.complaints_link')}</a>.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">{t('privacy.final_title')}</h2>
      <p>{t('privacy.final_details')}</p>
      <p>{t('privacy.final_update')}</p>
      <p className="mt-8"><b>{t('privacy.last_updated')}</b></p>
      <p className="mt-2 text-sm">{t('privacy.copyright')}</p>
    </div>
  );
};

export default PrivacyPolicy;