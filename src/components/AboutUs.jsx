import certificate from '../assets/diploma.webp';
import experience from '../assets/expertise.webp';
import quality from '../assets/quality-medal-svgrepo-com.svg';
import drilling_machine from '../assets/drilling-machine.webp';
import handshake from '../assets/partnership-handshake.webp';
import idea from '../assets/idea.webp';
import CountUp from './CountUp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="apie" className="mb-16">
      <div className='text-center mb-10'>
        <span className="text-orange text-xl">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</span>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-texts mb-4">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-mandova mx-auto mb-6"></div>
            <p className="text-xl text-orange max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-texts mb-4">
                {t('about.professionalism_title')}
              </h3>
              <p className="text-orange leading-relaxed">
                {t('about.professionalism_desc1')}
              </p>
              <p className="text-orange leading-relaxed">
                {t('about.professionalism_desc2')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={experience} alt={t('about.experience_alt')} className="w-6 h-6" /><span className="text-texts">{t('about.experience')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={certificate} alt={t('about.certificate_alt')} className="w-6 h-6" /><span className="text-texts">{t('about.certificate')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={drilling_machine} alt={t('about.machines_alt')} className="w-6 h-6" /><span className="text-texts">{t('about.machines')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={quality} alt={t('about.quality_alt')} className="w-6 h-6" /><span className="text-texts">{t('about.quality')}</span>
                </div>
              </div>
            </div>
            <div className="bg-texts rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">{t('about.results_title')}</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mandova mb-2">
                    <CountUp
                      from={0}
                      to={51}
                      separator="," 
                      direction="up"
                      duration={2}
                      className="count-up-text"
                    />
                  </div>
                  <div className="text-gray-600 text-xl">{t('about.projects_done')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mandova mb-2">
                    <CountUp
                      from={0}
                      to={2}
                      separator="," 
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                  </div>
                  <div className="text-gray-600 text-xl">{t('about.years_experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mandova mb-2">
                    <CountUp
                      from={0}
                      to={4}
                      separator="," 
                      direction="up"
                      duration={2}
                      className="count-up-text"
                    />
                  </div>
                  <div className="text-gray-600 text-xl">{t('about.projects_ongoing')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mandova mb-2">
                    <CountUp
                      from={0}
                      to={51}
                      separator="," 
                      direction="up"
                      duration={2}
                      className="count-up-text"
                    />
                  </div>
                  <div className="text-gray-600 text-xl">{t('about.happy_clients')}</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className=" cursor-pointer  bg-mandova hover:bg-mandova-dark text-orange text-2xl font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange hover:text-texts">
                  <Link to="/Contacts">{t('contact_us')}</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={quality} alt={t('about.quality_alt')} className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.quality_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.quality_card_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={handshake} alt={t('about.reliability_alt')} className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.reliability_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.reliability_card_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={idea} alt={t('about.innovation_alt')} className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">{t('about.innovation_card_title')}</h5>
              <p className="text-orange text-sm">
                {t('about.innovation_card_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;