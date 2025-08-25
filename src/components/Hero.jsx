import hero from '../assets/welding-work-with-metal-construction-busy-metal-factory.webp'
const Hero = () => {
  return (
    <>
      
      <div className="block sm:hidden w-full pt-8 px-4">
        <div className="text-center text-white max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 drop-shadow-lg text-texts leading-tight">
            Kokybiškas suvirinimas, džiuginantys rezultatai
          </h1>
          <h2 className="text-xl font-bold drop-shadow-md text-orange leading-tight">
            Statome tvirtesnę ateitį - vienas projektas po kito
          </h2>
        </div>
        <div>
          <img 
            src={hero} 
            alt='hero image'
            className='w-full object-center mt-4 brightness-35 sepia'
          />
        </div>
      </div>
      
      <div className="hidden sm:block relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <img 
          src={hero} 
          alt="Professional Welding Services" 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-35 sepia"
          loading='eager'
          fetchPriority='high'
          decoding='async'
        />
        <div className="text-orange font-bold text-sm md:text-base lg:text-lg xl:text-xl z-30 absolute top-4 right-3 md:right-4 lg:right-6">
          \\\\\\\\\\\\\\\\\\\\\
        </div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-3 md:px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-base md:text-lg lg:text-2xl xl:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 drop-shadow-lg text-texts leading-tight">
              Kokybiškas suvirinimas, džiuginantys rezultatai
            </h1>
            <h2 className="text-sm md:text-base lg:text-xl xl:text-2xl font-bold drop-shadow-md text-orange leading-tight">
              Statome tvirtesnę ateitį - vienas projektas po kito
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero