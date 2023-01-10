'use Cliente'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../motion/motion'

function Text({title, textStyles }:any) {
    return (
        <motion.p
            variants={textContainer}
            className={`font-bold text-[16px] text-secondary-white ${textStyles}`}
            >
            
            {Array.from(title).map((letter:any, index:any) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            ))}
        </motion.p>
    )
  }
  
  export default Text