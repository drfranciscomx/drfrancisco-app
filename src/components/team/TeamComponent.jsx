"use client"
import AnimatedText from "@/components/texts/AnimatedText";
import { motion } from "framer-motion";
import ContactCompnt from "../forms/ContactCompnt";
import Image from "next/image";

const TeamComponemt = (credentials) => {
  
  const templateid = credentials.templateID
    const serviceid = credentials.serviceID
    const publickey = credentials.publicKEY
    
  return (
    
    <section className="flex flex-col m:px-[20px] px-5 box-border items-center justify-center gap-[30px] text-center  h-full text-gray-white font-roboto">
      <motion.div 
      initial={{y:30, opacity:0 }} 
      whileInView={{y:0, opacity: 1 }} 
      transition={{duration: 0.5}}
      >
        <AnimatedText text={`¿Tienes una Idea Para Transformar`} text2={`tu Imagen?`} text3={`Platiquemos...`} className="text-7xl text-white font-headerFont md:text-2xl sm:text-4xl mb-10"/>
      </motion.div>
      
      
      <motion.div
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 1}}
        className="w-full relative "
      >
        <Image 
        width={2000}
        height={700}
        quality={100}
        sizes="(max-width: 768px) 100vw"
        style={{objectFit: "contain"}}
        className="relative max-w-full md:max-h-[300px] w-auto"
        alt=""
        src="/undefined3.webp"
      />
      </motion.div>
      
     
      <motion.h4 
        initial={{y:30, opacity:0 }} 
        whileInView={{y:0, opacity: 1 }} 
        transition={{duration: 0.7}}
        className="m-0 text-white font-bodyFont relative text-4xl sm:text-lg leading-[146%] font-medium font-inherit text-darkgray-200">
      <AnimatedText descrp="Nuestro equipo esta orgulloso de presentar siempre los mejores resultados de México, con gente que nos visita desde el extranjero tanto locales. Todos y cada uno de los procedimientos son realizados meticulosamente por el cirujano Dr. Francisco Rodríguez siguiendo estrictamente las pautas para el cuidado del paciente.  Todos los pacientes pueden esperar una experiencia que supere sus expectativas." className="text-mid"/>
       
        
      </motion.h4>
     
      <div className="mt-11 sm: h-[full] flex flex-row md:flex-col py-10 px-[0.44140625px] box-border items-center justify-center gap-[53px] text-left text-mid text-white">
        <div className="relative h-[25px]">
          <Image width={20} height={20}
            className="w-auto absolute top-[0px] left-[0px]  object-cover"
            alt=""
            src="/frame.webp"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
            4.9/5 Reseñas Positivas
          </div>
        </div>
        <div className="relative h-[25px]">
          <Image width={20} height={20}
            className="absolute top-[0px] left-[0px]w-auto  object-cover"
            alt=""
            src="/frame.webp"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
            Capacitacion Continua
          </div>
        </div>
        <div className="relative h-[25px]">
          <Image width={20} height={20}
            className="absolute top-[0px] left-[0px] w-auto  object-cover"
            alt=""
            src="/frame.webp"
          />
          <div className="relative top-[0px] left-[29.96px] leading-[146%] font-medium inline-block w-[262px]">
          Tecnologia de Punta
          </div>
        </div>
     
      </div>
      <ContactCompnt templateID={templateid} serviceID={serviceid} publicKEY={publickey}/>
    </section>
  );
};

export default TeamComponemt;
