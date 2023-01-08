import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/styles'
import { slideIn, staggerContainer, textVariant } from '../motion/motion'

function subnavbar() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
      <div className='flex justify-center items-center flex-col relative z-10'>
      <motion.h1
        variants={textVariant(1.1)}   
        className={styles.heroHeading} 
      >
        <h1 className=''>subnavbar</h1>
      </motion.h1>

      <motion.div
        variants={textVariant(1.2)}
        className = 'flex flex-row justify-center items-center'
      >
        <h1 className='style.heroHeading'>Nomadiix</h1>
      </motion.div>
    </div>
    </motion.div>
    </section>
  )
}

export default subnavbar