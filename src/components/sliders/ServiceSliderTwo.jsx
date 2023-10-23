import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode ,Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import React from 'react'
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { motion } from 'framer-motion';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide_image from "@/images/card23x.png" 
import slide_image2 from "@/images/card3@3x.png"
import slide_image3 from "@/images/card4@3x.png"
import Image from "next/image";

export const serviceData = [
  {
    backimage: <Image 
    src={slide_image} 
    fill
    
    alt='iamge' />,
    title: "Cara",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image2} 
    fill
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"	 
    alt='iamge' />,
    title: "Seno",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image3} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Abdomen",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Cara",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image2} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Seno",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },
  {
    backimage: <Image src={slide_image3} 
    fill 
    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 33vw"
    alt='iamge' />,
    title: "Abdomen",
    description:'lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum lorem ipsum dolor sit amat connectaur antispacin alit. Dum'
  },


  
  
]


const ServiceSlider3D = () => {
  return (
      <Swiper 
      effect={`coverflow`}
      grabCursor={ true }
      centeredSlides= { true }
      loop={ true }
      slidesPerView={ 'auto' }
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
      }
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      pagination={{ el:'.swiper-pagination', clickable:true}}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
      }}
      modules={[ Navigation, Pagination, EffectCoverflow ]}
      className='swiper-container h-[400px] sm:h-[540px]'
      >
        {
          serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                
                <div className='h-[100%] inline-block align-middle px-4 py-20 lg:py-10 relative'>
                  <div className='relative z-10 mx-auto my-0 font-playfair-display text-5xl'>{item.title}</div>
                  <p className='relative z-10 text-base font-sans font-light'>{item.description}</p>
                  <motion.a 
                    whileHover={{y:-4 }}
                    whileTap={{ y:1 }} 
                    transition={{duration: 0.09}}
                    href='/'
                    className='
                    relative z-10 bg-black border-none text-white no-underline px-5 py-2 text-center inline-block m-auto cursor-pointer text-sm'>
                    Saber Mas...
                  </motion.a>
                  <div className='p-5 z-0 object-cover text-mid '>
                    {item.backimage}
                  </div>
                
                </div>
               
               
              </SwiperSlide>
          )}
        )}
        <div className='slider-controller'>
          <div className='swiper-button-prev slider-arrow'>
              <PiCaretLeftLight/>
          </div>
          <div className='swiper-button-next slider-arrow'>
              <PiCaretRightLight />
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper >
      
  )
}

export default ServiceSlider3D