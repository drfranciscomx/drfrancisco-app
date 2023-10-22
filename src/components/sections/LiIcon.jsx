import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';

const LiIcon = ({reference}) => {


    const {scrollYProgress} = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"]
        }
      )

  return (
    <figure className='absolute left-0 stroke-white'>
        <svg className='absolute left-[-37px]' width={`75`} height={`75`} viewBox='0 0 100 100'>
            <circle cx={`75`} cy={`50`} r={`20`} className='stroke-yellow-400 stroke-1 fill-none'/>
            <motion.circle cx={`75`} cy={`50`} r={`20`} className='stroke-[5px] fill-yellow-600 stroke-yellow-400 ' style={{
                pathLength: scrollYProgress
            }}/>
            <circle cx={`75`} cy={`50`} r={`10`} className=' stroke-1 fill-yellow-200 animate-pulse'/>
        </svg>
    </figure>
  )
}

export default LiIcon