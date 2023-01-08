'use client'
import { motion } from 'framer-motion'
import styles from '../styles/styles'
import { navVariants } from '../motion/motion'


function navbar() {
  return (
    <motion.nav
    variants={navVariants}
    initial ='hidden'
    whileInView={'show'}
    className={`${styles.xPaddings} py-8 relative`}
    >
    <div className='absolute w-[50%] inset-0 gradient-01'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <h2 className = ' font-bold text-[24px] leading-[30px]'>NOMADIIX</h2>
    </div>

    </motion.nav>
    
  )
}

export default navbar