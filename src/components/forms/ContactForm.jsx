"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = (credentials) => {

  const form = useRef();

   //email js service Ids
   const templateId = credentials.templateID
   const serviceId = credentials.serviceID
   const publicKey = credentials.publicKEY
   
  const sendEmail = async (e) => {
    console.log("Event at form send:*************" , e);
    e.preventDefault();
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(() => {
          setData({from_name:"", email:"", message:"", tel:""})
      }, (error) => {
          console.log(error.text);
      });
  };


  const [data, setData] = useState({from_name:"", email:"", message:"", tel:""});
  const handleFormChange = (event) => {
    const from_name = event.target.name;
    const value = event.target.value;
    setData({...data, [from_name]: value})
  }

  return (
    <>
    <motion.form 
    ref={form}
    initial={{y:30, opacity:0 }} 
    whileInView={{y:0, opacity: 1 }} 
    transition={{duration: 0.5}} 
    method='post' onSubmit={(e) => sendEmail}
    className={`flex flex-col gap-y-2 w-[80%] mx-auto`}>
      <div className='flex flex-row gap-x-2'>
      <input className='inputFields w-full py-5 px-2 bg-stone-950 text-white font-bodyFont focus:outline-none' type="text" value={data.from_name} name='from_name' onChange={handleFormChange} id='from_name_id' placeholder='Nombre' />
      <input className='inputFields w-full py-5 px-2  bg-stone-950 text-white font-bodyFont focus:outline-none' type="email" value={data.email} name='email' onChange={handleFormChange} id='email_id' placeholder='Email'/>

      </div>
      <input className='inputFields w-full py-5 px-2  bg-stone-950 text-white font-bodyFont focus:outline-none' type='tel' value={data.tel} name='tel'  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" onChange={handleFormChange} id='tel_id' placeholder='555 555 5555'/>
      <input type="hidden" id='honeypot' onChange={handleFormChange} />
      <textarea className='py-5 px-4 bg-opacity-90 bg-stone-950 text-white font-bodyFont focus:outline-none' name="message" value={data.message} onChange={handleFormChange} id="message_id" cols="30" rows="5" placeholder='Tu mensaje aqui...'/>
      <motion.div
          initial={{y:30, opacity:0 }} 
          whileInView={{y:0, opacity: 1 }} 
          transition={{duration: 0.7}} 
      >
            <motion.button 
            whileHover={{y:-4 }}
            whileTap={{ y:1 }} 
            transition={{duration: 0.09}}
            className="mt-5 cursor-pointer [border:none] px-10 py-5  sm:px-5 bg-black  items-start justify-center hover:bg-yellow-600 duration-300 ease-linear"
            type='submit'
            >
            <div className="self-stretch relative flex flex-row justify-between items-center">
              
              <h4 className="m-0 text-white top-[14.5px] left-[25px] text-[24px] sm:text-[18px] pr-5 font-medium font-barlow-condensed text-gray-white text-center inline-block ">
                Solicitar consulta
              </h4>
              <Image
                className="w-[30.5px] sm:w-[25.5px] h-full object-cover"
                width={30} height={30}
                alt=""
                src="/arrow-5.webp"
              />
            </div>
          </motion.button>

      </motion.div>
     
    </motion.form>
     </>
  )
}

export default ContactForm