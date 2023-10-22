import React from 'react'
import { motion } from "framer-motion";
import AnimatedText from "../texts/AnimatedText";

const BeforeAndAfter = () => {
  return (
    <div className="my-0 mx-auto top-[70px] flex flex-col py-0 px-[28px] box-border items-center justify-start gap-[17px] z-[1] text-center text-gray-white font-playfair-display">
            <div className="self-stretch flex flex-col items-center justify-center relative ">
              <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.5}} 
              >
                <AnimatedText text="Testimonios que Hablan Por" text2="Nuestros Resultados" className="font-headerFont sm:text-2xl text-5xl text-white mb-3"/>
              </motion.div>
              <motion.p 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.7}} 
                className="text-white font-bodyFont text-2xl w-[80%]">El cuidado del paciente siempre es nuestra prioridad, es por eso que el 100% de los pacientes que nos visitan tienen la mejor experiencia en cirugía plástica
                </motion.p>
            </div>
          </div>
  )
}

export default BeforeAndAfter