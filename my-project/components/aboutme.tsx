import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../motion/motion'
import Text from './Text'


function aboutme() {
  return (
    <section className=' paddings relative z-10'>
        <div className='gradient-02 z-0'/>
        <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mt-[8px] innerWidth mx-auto flexCenter flex-col'
        >
        <Text title='Sobre nosotros' textStyles='text-center'/>
        
        <motion.p 
            variants={fadeIn('up', 'tween', 0.2 , 1)}
            className='mt-[8px] font-normal sm:text-[18px] text-[20px] text-center text-secondary-white'
        >
            Buenas, me llamo Nomadiix, soy un desarrollador 
            indi y me gusta a compartir el proceso de mi trabajo en mi <a href='https://www.youtube.com/@NomaDiix/featured' className=' font-extrabold text-white' target={'_black'}> canal de youtube</a>. Tambien pueden contactarme 
            por <a href='https://www.linkedin.com/in/fabian-martinez-rincon/' className=' font-extrabold text-white' target={'_black'}>linkedin</a> . Podes contratarme para hacer un 
            diseño de una web, desarrollarla o mantenerla esto 
            va en función de tus necesidades.
        </motion.p>

        </motion.div>
        
    </section>
    
  )
}

export default aboutme