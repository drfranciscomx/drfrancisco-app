"use client"
import AnimatedText from "../texts/AnimatedText";
import { motion } from "framer-motion";

const MainServicesComponent = () => {
 
  return (
      <div className="w-[85%] sm:w-full mx-auto elative px-8 sm:mt-20 rounded-3xs bg-sendblack flex flex-col pt-[80px] sm:pt-[40px] text-center  text-gray-white  ">
              <motion.div
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.5}} 
                className="flex justify-start flex-row text-left mb-10 sm:mb-0 text-white text-6xl font-headerFont">
                  <AnimatedText text={`Enfoque en`} text2={`Servicio Centrado`} text3={`en el Paciente`} className="text-53xl md:text-5xl text-center"/>
              
            </motion.div>
        <div className=" w-full">
          
          
            <div className="w-full flex flex-row md:flex-col">
            
              <motion.div 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.6}} 
                className="text-center w-full top-0 flex flex-col py-0 pr-[40px] md:pr-[0px] box-border items-start justify-start gap-[48px] text-whitesmoke-100 md:self-stretch mb-[40px] text-white font-bodyFont -tracking-widest leading-7 text-xl">
              
              
                <AnimatedText descrp={`Nos enorgullecemos de brindar un valor incomparable a los pacientes que atendemos. Nuestros cirujanos plásticos certificados por la junta de Arizona entienden que usted tiene necesidades y  objetivos únicos, y tiene la amplia experiencia y habilidades artísticas para lograr los resultados deseados, ya sea que busque cirugía de senos, contorno corporal, procedimientos faciales o  rejuvenecimiento de la piel.`} className="jusify-center text-center"/>
            
              </motion.div>
             

            </div>
        </div>
      </div>
      
  );
};

export default MainServicesComponent;
