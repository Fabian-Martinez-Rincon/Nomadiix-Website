'use client'
import { motion } from 'framer-motion'
import { navVariants } from '../motion/motion'


function navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial ='hidden'
    whileInView={'show'}
    className="xPaddings py-8 relative"
    >
    <div className='absolute w-[100%] inset-0 gradient-01'/>
    <div className="innerWidth mx-auto flex justify-center gap-8">
      <h2 className = ' font-bold text-[24px] leading-[30px]'>PROGRAMACIÓN</h2>
    </div>

    </motion.nav>
    
  )
}

export default navbar