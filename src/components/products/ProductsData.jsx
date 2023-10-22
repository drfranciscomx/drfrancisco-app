"use client";

import Image from "next/image";
import { IoIosStar, IoMdHeart, IoMdCart } from "react-icons/io";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { calculatePercentage } from "@/helpers";
import FormatedPrice from "@/helpers/FormatedPrice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import { useEffect, useState } from "react";

const ProductsData = ({ item }) => { 

  const dispatch = useDispatch();
  
  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-500">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full rounded-lg overflow-hidden">
       <motion.div 
                initial={{y:30, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 1.0}} 
      >
        <a  href={`/details/${item._id}`}>
          <div className="w-full h-96 group overflow-hidden relative">
            <Image
              src={item?.imageUrls[0]}
              alt="product image"
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
              width={500}
              height={500}
            />
              
              {item?.isPromo && (
                <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-yellow-600 group-hover:text-white duration-200">
                Promo
              </span>
            )}
          </div>
        </a>
        <div className="border-[1px] border-gray-800 border-t-0 px-4 py-4 flex flex-col gap-y-2 bg-black rounded-b-lg">
            {/* star icons
            <div className="flex items-center gap-x-1">{startArray}</div> */}
          <p className="text-white tracking-widest">{item?.title}</p>
          <div className="flex items-center justify-between">
            {/* <div className="border-[1px] border-yellow-600 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% menos</p>
            </div> */}
            <div className="flex flex-col gap-y-1">
              <p className="text-slate-500 line-through text-sm">
                {/* <FormatedPrice amount={item?.oldPrice} /> */}
              </p>
              
              <p className="font-semibold text-white tracking-wider text-2xl">
                <FormatedPrice amount={item?.deposit} />
              </p>
              <div className="">
              <p className="text-xs text-yellow-600">Reserva tu Consulta</p>
                <p className="font-semibold text-white tracking-wider">
                  <FormatedPrice amount={item?.price} />
                </p>
              

              </div>
              
            </div>
            
          </div>
          <div className="flex items-center justify-between">
            {/* add to cart button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-600 px-4 py-2 text-sm flex flex-row justify-between gap-x-2 items-center tracking-wide rounded-full text-slate-100 hover:bg-black hover:text-white duration-500"
              onClick={() => dispatch(addToCart(item)) && toast.success(`${item?.title.substring(0,15)} se agrego al carrito!`)}
            >
              Agregar a carrito
              <IoMdCart className=""/>
            </motion.button>
          
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default ProductsData;