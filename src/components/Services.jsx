import lines from '../assets/lines.webp'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="paslaugos" className='my-16'>
      <div>
        <img 
          src={lines}
          alt={t('services.lines_alt')}
          className='absolute inset-0 w-230 object-cover -z-10 top-150 -left-50 opacity-20'/>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-texts mb-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <span className='text-orange text-xl'>\\\\\\\\\\\</span>  
                <span>{t('services.title')}</span>
                <span className='text-orange text-xl'>\\\\\\\\\\\</span>
              </div>
            </h2>
            <div className="w-20 h-1 bg-mandova mx-auto mb-4"></div>
            <p className="text-orange text-xl max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange text-center group transition-all duration-300 p-6 rounded-lg lg:hover:-translate-y-8 lg:hover:shadow-lg" style={{ touchAction: 'manipulation' }}>
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors">
                <svg className="w-8 h-8 text-mandova" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card1.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card1.desc')}
              </p>
            </div>
            <div className="bg-orange text-center group transition-all duration-300 p-6 rounded-lg lg:hover:-translate-y-8 lg:hover:shadow-lg" style={{ touchAction: 'manipulation' }}>
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors">
                <svg className="w-8 h-8 text-mandova" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card2.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card2.desc')}
              </p>
            </div>
            <div className="bg-orange text-center group transition-all duration-300 p-6 rounded-lg lg:hover:-translate-y-8 lg:hover:shadow-lg" style={{ touchAction: 'manipulation' }}>
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-mandova/20 transition-colors">
                <svg className="w-8 h-8 text-mandova" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-texts mb-3">{t('services.card3.title')}</h3>
              <p className="text-background text-sm">
                {t('services.card3.desc')}
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-orange text-xl mb-6">{t('services.consultation')}</p>
            <button className="cursor-pointer bg-orange hover:bg-texts text-2xl text-texts hover:text-background font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Link to="/Contacts">{t('contact_us')}</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;