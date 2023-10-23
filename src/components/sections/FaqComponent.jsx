import { accordions } from "@/data/faqdata";
import Accordion from "./Accordion";
import ContactForm from "../forms/ContactForm";
import { motion } from "framer-motion";

const FaqComponent = () => {
  return (
    <section className="pb-20 pt-10 px-20 md:px-1 w-full h-[100%] md:h-full  flex flex-row  box-border items-center justify-center bg-[url('/faq@3x.webp')] bg-cover bg-no-repeat bg-[top] text-left text-base text-gray-white font-playfair-display">
      <div className="w-[95%] flex flex-row md:flex-col my-[60px]">

        {/* Contact */}
          <div className="w-1/2 font-headerFont md:w-full sm:w-[90%] px-5 sm:px-3 shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <motion.h2 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.5}} 
              className="h-[100px] items-center flex relative text-7xl tracking-[3px] leading-[32px] uppercase font-normal font-inherit text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
              Faq
            </motion.h2>
            <motion.h2 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.6}}  className="m-0 relative w-full text-2xl leading-[48px] font-semibold font-inherit">
              <span className="text-white ">{`Preguntas `}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
                Frecuentes
              </span>
            </motion.h2>
            <motion.div 
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.7}} 
              className="relative leading-[32px] font-text inline-block shrink-0 text-white font-bodyFont text-xl">
              ¿Tienes dudas adicionales? mandanos un mensaje o agenda una consulta y
              aclaramos tus preguntas.
            </motion.div>
          
            <motion.div
              initial={{y:30, opacity:0 }} 
              whileInView={{y:0, opacity: 1 }} 
              transition={{duration: 0.9}} 
            >

            </motion.div>
            <ContactForm className={``}/>
            
          </div>
        {/* FAQ */}
          <motion.div 
            initial={{y:30, opacity:0 }} 
            whileInView={{y:0, opacity: 1 }} 
            transition={{duration: 0.7}} 
            className=" w-full max-w-[50%] md:max-w-[100%] sm:max-w-[100%] flex flex-col">
                {
                  accordions.map((item, id) => {
                    const {pregunta, respuesta} = item;
                    return (
                      <div key={id} className="text-white cursor-pointer  rounded-t-md rounded-b-none bg-transparent shadow-[0px_32px_64px_rgba(57,_20,_0,_0.04)] p-5 my-3 border-t border-yellow-600">
                          <Accordion pregunta={pregunta} respuesta={respuesta}>

                          </Accordion>
                      </div>
                    )
                  })
                }
          </motion.div>


      </div>
    </section>
  );
};

export default FaqComponent;
