import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../motion/motion'

function subnavbar() {
  return (
    <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25}}
      className="innerWidth mx-auto flex flex-col"
      >
      <div className='flex justify-center items-center flex-col relative z-10'>
      <motion.h1 variants={textVariant(1.1)}>
        <h1 className=' heroHeading'>NOMADIIX</h1>
      </motion.h1>
      
      <motion.h1 variants={textVariant(1.2)}>
        <h1 className=' heroHeading'>DEVELOPER</h1>
      </motion.h1>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className = ' relative w-full md:-mt-[10px] -mt-[12px]'
      >
        <img src="/12.jpg" className=' rounded-full w-full sm:h-[500px] h-[300px] object-cover z-10 inset-1  '/>
      
      

      </motion.div>
    </div>
    </motion.div>
    </section>
  )
}

export default subnavbar