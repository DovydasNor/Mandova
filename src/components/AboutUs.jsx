import certificate from '../assets/diploma.webp';
import experience from '../assets/expertise.webp';
import quality from '../assets/quality-medal-svgrepo-com.svg';
import drilling_machine from '../assets/drilling-machine.webp';
import handshake from '../assets/partnership-handshake.webp';
import idea from '../assets/idea.webp';
import CountUp from './CountUp';
import {Link} from 'react-router-dom';

const AboutUs = () => {
  return (
    <section id="apie" className="mb-16">

        <div className='text-center mb-10'>
            <span className="text-orange text-xl">\\\\\\\\\\\\\\\\\\\\\</span>
        </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-texts mb-4">
              Apie <span className="text-mandova">Mandova</span>
            </h2>
            <div className="w-24 h-1 bg-mandova mx-auto mb-6"></div>
            <p className="text-xl text-orange max-w-3xl mx-auto">
              Jau daugiau nei 2 metus teikiame profesionalius suvirinimo ir metalo konstrukcijų gamybos sprendimus
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-texts mb-4">
                Profesionalumas ir patikimumas
              </h3>
              
              <p className="text-orange leading-relaxed">
                <strong className='text-texts'>Mandova</strong> - tai patikimas partneris, kuris specializuojasi aukštos kokybės 
                suvirinimo paslaugose ir metalo konstrukcijų gamyboje. Mūsų komanda turi ilgametę patirtį 
                ir naudoja pažangiausias technologijas.
              </p>
              
              <p className="text-orange leading-relaxed">
                Mes dirbame su įvairiausiais projektais - nuo smulkių remonto darbų iki didelių 
                pramonės objektų. Mūsų tikslas - suteikti klientams geriausią kokybę ir patikimumą.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={experience} alt="Patirtis" className="w-6 h-6" /><span className="text-texts">2 metų patirtis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={certificate} alt="Sertifikatas" className="w-6 h-6" /><span className="text-texts">Sertifikuoti specialistai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={drilling_machine} alt="Pramoniniai įrengimai" className="w-6 h-6" /><span className="text-texts">Modernūs įrengimai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-mandova rounded-full"></div>
                  <img src={quality} alt="Kokybė" className="w-6 h-6" /><span className="text-texts">Garantuota kokybė</span>
                </div>
              </div>
            </div>

            <div className="bg-texts rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Mūsų rezultatai</h4>
              
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
                  <div className="text-gray-600 text-xl">Užbaigtų projektų</div>
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
                  <div className="text-gray-600 text-xl">Metų patirtis</div>
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
                  <div className="text-gray-600 text-xl">Vykdomų projektų</div>
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
                  <div className="text-gray-600 text-xl">Laimingų klientų</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className=" cursor-pointer  bg-mandova hover:bg-mandova-dark text-orange text-2xl font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange hover:text-texts">
                  <Link to="/Contacts">Susisiekite su mumis</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={quality} alt="kokybė" className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">Kokybė</h5>
              <p className="text-orange text-sm">
                Naudojame tik aukščiausios kokybės medžiagas ir įrangą
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={handshake} alt="Patikimumas" className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">Patikimumas</h5>
              <p className="text-orange text-sm">
                Visada laikomės sutartų terminų ir įsipareigojimų
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mandova/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-mandova rounded-full"></div>
              </div>
              <img src={idea} alt="Inovacijos" className='w-18 mx-auto' />
              <h5 className="text-lg font-semibold text-texts mb-2">Inovacijos</h5>
              <p className="text-orange text-sm">
                Nuolat investuojame į naują technologijų ir metodų plėtrą
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs