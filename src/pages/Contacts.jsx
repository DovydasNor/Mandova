import lines from '../assets/lines.webp'

const Contacts = () => {
  return (
    <div id="kontaktai" className="min-h-screen py-16 relative">

      <img 
        src={lines}
        alt="Decorative lines"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-texts mb-6">
              Susisiekite su <span className="text-mandova">mumis</span>
            </h1>
            <div className="w-24 h-1 bg-mandova mx-auto mb-8"></div>
            <p className="text-xl text-orange max-w-3xl mx-auto">
              Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                  <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-texts mb-2">Adresas</h3>
                  <p className="text-lg text-orange">J. Basanavičiaus g. 144a</p>
                  <p className="text-lg text-orange">76128 Šiauliai, Lietuva</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                  <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <h3 className="text-2xl font-semibold text-texts mb-2">Telefonas</h3>
                  <a href='tel:+37062223642' className="text-xl text-orange font-medium">+370 622 23642</a>
                  <a href='tel:+37065399915' className="text-xl text-orange font-medium">+370 653 99915</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-mandova/10 rounded-full flex items-center justify-center mt-2 flex-shrink-0">
                  <svg className="w-6 h-6" fill="#ab9881" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-texts mb-2">El. paštas</h3>
                  <a href='mailto:info@mandova.lt' className="text-xl text-orange">info@mandova.lt</a>
                  <p className="text-base text-orange">Atsakysime per 24 val.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-texts mb-8">Kaip mus rasti</h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.331514106501!2d23.317763076789312!3d55.96095747316198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e384182afc51%3A0xbdeee0bfb4ba6928!2sMandova!5e0!3m2!1slt!2slt!4v1754823334594!5m2!1slt!2slt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mandova Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com/?q=J.+Basanavičiaus+g.+144a,+76128+Šiauliai,+Lietuva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mandova hover:bg-mandova-dark text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block"
                >
                  Atidaryti žemėlapyje
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts