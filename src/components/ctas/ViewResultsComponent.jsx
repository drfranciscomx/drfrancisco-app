"use client"
import ReactCompareImage from 'react-compare-image';
import AnimatedText from '../texts/AnimatedText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import arrowimage from "@/images/arrow-51.png"
import Link from 'next/link';

const ViewResultsComponent = () => {
  return (
    <section className=" w-full grid grid-cols-2 sm:grid-cols-1  pt-[140px] items-center ">
        <div className='w-[90%]  items-center text-right'>
        <motion.div
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.7}} 
        >
          <AnimatedText text={`Viualiza Los`} text2={`Resultados`} text3={`Naturales.`} className='text-white text-7xl font-headerFont sm:text-5xl'/>
        </motion.div>
        
        <Link href={"/galeria"} className='justify-end'>
          <motion.button 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.8}} 
              className="mt-4 px-20 sm:px-10 py-5 items-center  cursor-pointer bg-black [border:none] bg-[transparent] relative mb-10">
            
              <h4 className="m-0 flex flex-row  gap-x-2 items-center tracking-[0.05em] leading-[123%] font-medium font-barlow-condensed text-gray-white text-white text-2xl sm:text-base">
                Ver galeria 
                <Image width={20} height={20}
                className="w-[34.5px] h-[22.09px] object-cover"
                alt=""
                src={arrowimage}
              />
              </h4>
              
            </motion.button>
        </Link>  
         
      </div>
      <div className=''>
          <motion.div 
                  initial={{y:30, opacity:0 }} 
                  whileInView={{y:0, opacity: 1 }} 
                  transition={{duration: 0.7}} 
                  className="w-[70%] sm:w-[95%] mx-auto pb-20 items-center [transform:_rotate(-0.24deg)] [transform-origin:0_0]">
                
                  <ReactCompareImage leftImage="/Tummy-Tuck-Before.jpg" rightImage="/Tummy-Tuck-After.jpg" className="relative rounded-3xs w-full h-[493.42px] "/>

            </motion.div>
      </div>
    
     
    </section>
  );
};

export default ViewResultsComponent;
