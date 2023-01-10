import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../motion/motion'
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
        className='innerWidth mx-auto flexCenter flex-col'
        >
        <Text title='Sobre nosotros' textStyles='text-center'/>
        
        </motion.div>
        
    </section>
    
  )
}

export default aboutme