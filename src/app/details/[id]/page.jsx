"use client"
import React, { useRef } from 'react'
import { MdFavoriteBorder, MdStarRate } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppingSlice';
import { IoIosStar } from "react-icons/io";
import ProductsData from '@/components/products/ProductsData';
import classes from '@/components/products/catalog.module.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FormatedPrice from '@/helpers/FormatedPrice';
import { calculatePercentage } from '@/helpers';
import { localproducts } from '@/data/localproductsdatta.';
import Image from 'next/image';

const DetailsPage = (ctx) => {
    
    const imageRef = useRef(null)

    const setImgPreview = (image) => {
        imageRef.current.srcset = image
    }

    const [isLoading, setIsLoading] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])
    const id = ctx.params.id
    const URL = `/api/localservicio?${id}`
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [showModal, setShowModal] = useState(false)
    // five dollars per 100 pages
    const price = ((product?.pages / 100) * 5).toFixed(2)

    useEffect(() => { 

      const getData = setTimeout( async () => {
        try {
          setIsLoading(true)
          const res = await fetch(`/api/servicios`)
          const { products } = await res.json()
          

          let sliced_products = localproducts.slice(0, 4)
          sliced_products = sliced_products.map(( product ) => {
              const id = product._id
              
              return {
                _id: id,
                title: product.title,
                description: product.description,
                category: product.category,
                subCat: product.subCat,
                tags: product.tags,
                brand: product.brand,
                isNewest: product.isNewest,
                isFeatured: product.isFeatured,
                price: product.price,
                salesPrice: product.salesPrice,
                mainImageUrl: product.mainImageUrl,
                imgsSrc: product.imgsSrc,
                sizes: product.sizes,
                rating: product.rating,
                quantity: product.quantity,
                sku: product.sku
              }
            
          })

          const formattedProducts = []
          for (let i = 0; i < sliced_products.length; i++) {
            if (sliced_products[i]?.mainImageUrl) {
              formattedProducts.push(sliced_products[i])
            }
          }

          function filteredByCategory(category) {
            const productsByCategory = []
            for (let i = 0; i < formattedProducts.length; i++) {
              if (formattedProducts[i]?.category == category ) {
                productsByCategory.push(sliced_products[i])
              }
            }
            return productsByCategory
          }

        
          setFilteredProducts(formattedProducts)
          
          
          
        } catch (error) {
          console.log(error)
        }
        setIsLoading(false)
      })

      return () => {
        clearTimeout(getData)
      }
    }, [])

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                //const res = await fetch(URL)
                const res = await fetch(URL, {
                  'mode': 'cors',
                  'headers': {
                      'Access-Control-Allow-Origin': 'GET, POST, PUT',
                  }
                });
                
                const data = await res.json()
                const details = {
                    _id: data.product._id,
                    title: data.product.title,
                    description: data.product.description,
                    category: data.product.category,
                    isPromo: data.product.isPromo,
                    price: data.product.price,
                    promoPrice: data.product.promoPrice,
                    imageUrls: data.product.imageUrls,
                    rating: data.product.rating,
                    quantity: data.product.quantity,
                    deposit: data.product.deposit,
                }
                setProduct(details)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetails()
    }, [])


    const starRating = (props) => {
          if (props) {
            let stars = props
            if (stars == 0 || stars == 1 || stars == 1.5 ) {
              stars = 1
            } else if(stars == 2 || stars == 2.5 ){
              stars = 2
            } else if(stars == 3 || stars == 3.5 ){
              stars = 3
            } else if(stars == 4 || stars == 4.5 ){
              stars = 4
            } else if(stars == 5 ){
              stars = 5
            }
        }
  
        const starArray = Array.from({ length: props }, (_, index) => (
        
          <span key={index} className="text-yellow-500">
            <IoIosStar />
          </span>
        ));
        return (
            <>
              {starArray}
            </>
          );
        
    }


    return (
      
      <div className="container-class">
         
        <div className='w-[95%] mx-auto wrapper-class gap-5 bg-stone-900 bg-opacity-80 p-4 rounded-lg'>
          <div className='flex md:flex-col-reverse flex-row'>
          <div className='w-2/3 md:w-full images-grouped-class justify-end flex flex-col '>
              <div className=' loader-class flex items-center  justify-center h-full w-full'>
                { isLoading ? <div className={`${classes.loader} absolute h-20 `} /> 
                    : <motion.div 
                    initial={{x:-50, opacity:0 }} 
                    whileInView={{x:0, opacity: 1 }} 
                    transition={{duration: 0.7}}
                    className='md:p-2 p-10'
                  >
                  
                    <Image
                      ref={imageRef}
                      src={  product?.imageUrls ? (product.imageUrls[0]) : "/images/faq@3x.webp" }
                      alt="product image"
                      className="rounded-lg object-cover ease-in-out duration-500"
                      width={700}
                      height={700}
                    />
                  </motion.div>
                  }
              </div>
            
              <div className='image-slider-class flex flex-row justify-center items-center gap-4 mt-2 pl-20 sm:px-2 image-slider-class h-full'>
                { isLoading ? <div className={`${classes.loader} absolute h-20`} /> 
                    : <Swiper
                        // install Swiper modules
                        modules={[ Pagination, A11y, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={3}
                        autoplay={true}
                        onSwiper={(swiper) => console.log()}
                        onSlideChange={() => console.log('')}
                        className='w-full '
                      >
                        {
                          product?.imageUrls && product.imageUrls.map(( image, index ) => (
                              <SwiperSlide key={index}>
                                  <a 
                                    className='slider-link cursor-pointer'
                                    onClick={() => setImgPreview(image)}>
                                    <Image
                                      src={ image ? image : "" }
                                      alt="product image"
                                      className="rounded-lg w-full h-full p-1"
                                      width={500}
                                      height={500}
                                    />
                                  </a>
                              </SwiperSlide>
                            
                          ))
                        }
                        ...
                      </Swiper> 
                  }
                
              </div>
          </div>

          <div className="flex flex-col pt-10 gap-y-10 w-3/4 md:w-full p-5 pb-10">
            <motion.div 
            initial={{x:50, opacity:0 }} 
            whileInView={{x:0, opacity: 1 }} 
            transition={{duration: 0.5}}
            >
              <p className="text-3xl font-semibold text-white font-headerFont">{product?.title}</p>
              <div className="text-xl font-semibold">
              <div className="stars flex items-center gap-x-1">{starRating(product?.rating)} 
                  <span className='font-medium text-xl'>{product?.rating}
                  </span>
              </div>
             
                
                    {
                      product?.promoPrice ?   <div>
                      <div className="border-[1px] border-yellow-600 py-1 px-4 rounded-full text-xs">
                        <p>{calculatePercentage(product?.deposit, product?.promoPrice)}% menos</p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <p className="line-through text-sm text-white font-bodyFont">
                          <FormatedPrice amount={product?.promoPrice} />
                        </p>
                      </div>
                </div>: ""
                    }
                    
                    <p className="font-semibold text-4xl text-white font-bodyFont">
                        <FormatedPrice amount={product?.deposit} />
                      </p>
                    <p className="text-xl text-white font-bodyFont">
                        <FormatedPrice amount={product?.price} />
                      </p>
                      <p className='text-xs font-normal text-yellow-600'>Deposito inicial</p>
              </div>
            </motion.div>
            
            <motion.div 
                initial={{y:50, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.6}}
            className="text-white font-bodyFont description-class">{ product?.description ? ( product?.description ): ("") }</motion.div>
            <motion.div 
                initial={{y:50, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.7}}
                className="text-sm text-lightText flex flex-col"
            >
              <span>
                SKU: <span className="text-white font-bodyFont">{product?._id}</span>
              </span>
              <span>
                Categoria: <span className="ttext-white font-bodyFont">{product?.category}</span>
              </span>
            </motion.div>
            <motion.div
                initial={{y:50, opacity:0 }} 
                whileInView={{y:0, opacity: 1 }} 
                transition={{duration: 0.8}}
              className="flex items-center cursor-pointer group"
            >
             {/* add to cart button */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500"
                onClick={() => dispatch(addToCart(product)) && toast.success(`${product?.title.substring(0,15)}... se agrego al carrito`, {
                  position: toast.POSITION.TOP_CENTER
                })}
              >
                Agregar a carrito
                <span className="text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-black duration-200  rounded-full py-2">
                <IoMdCart />
              </span>
              </motion.button>
              
            </motion.div>
          </div>
          </div>
        </div>
       
        <ToastContainer />
      </div>
    )
  }

export default DetailsPage