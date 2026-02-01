import { motion } from 'framer-motion'

const viewportScrollDown = { once: true, amount: 0.3 }
const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const GoogleMap = () => {
  return (


      <motion.div 
        className="w-full h-96"
        initial="initial"
        whileInView="animate"
        viewport={viewportScrollDown}
        variants={fadeInDown}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.331514106501!2d23.317763076789312!3d55.96095747316198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e384182afc51%3A0xbdeee0bfb4ba6928!2sMandova!5e0!3m2!1slt!2slt!4v1754823334594!5m2!1slt!2slt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mandova Location"
        ></iframe>
      </motion.div>
  )
}

export default GoogleMap