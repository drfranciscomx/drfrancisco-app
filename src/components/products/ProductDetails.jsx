'use client';
import React, { useRef } from 'react';
import { IoMdCart } from 'react-icons/io';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppingSlice';
import { IoIosStar } from 'react-icons/io';
import classes from '@/components/products/catalog.module.css';
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FormatedPrice from '@/helpers/FormatedPrice';
import { calculatePercentage } from '@/helpers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProductDetails = ({ ctx, product }) => {
  const router = useRouter();

  const imageRef = useRef(null);

  const setImgPreview = (image) => {
    imageRef.current.srcset = image;
  };

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const starRating = (props) => {
    if (props) {
      let stars = props;
      if (stars == 0 || stars == 1 || stars == 1.5) {
        stars = 1;
      } else if (stars == 2 || stars == 2.5) {
        stars = 2;
      } else if (stars == 3 || stars == 3.5) {
        stars = 3;
      } else if (stars == 4 || stars == 4.5) {
        stars = 4;
      } else if (stars == 5) {
        stars = 5;
      }
    }

    const starArray = Array.from({ length: props }, (_, index) => (
      <span key={index} className="text-yellow-500">
        <IoIosStar />
      </span>
    ));
    return <>{starArray}</>;
  };

  return (
    <div className="container-class py-20 sm:py-8">
      <div className="w-[80%] md:w-[90%] mx-auto wrapper-class gap-5 bg-stone-900 bg-opacity-80 p-4 rounded-lg">
        <div className="flex flex-row sm:flex-col-reverse items-start justify-start gap-x-5 px-20 py-8 md:py-4 md:px-5 sm:px-0">
          <div className="image-class w-1/2 sm:w-full flex flex-col items-end justify-end">
            {isLoading ? (
              <div className={`${classes.loader} absolute h-20 `} />
            ) : (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="p-2 w-[99%] min-h-[300px] flex"
              >
                <Image
                  ref={imageRef}
                  src={
                    product?.imageUrls
                      ? product.imageUrls[0]
                      : '/images/faq@3x.webp'
                  }
                  alt="product image"
                  className="rounded-lg object-cover ease-in-out duration-500"
                  width={800}
                  height={800}
                />
              </motion.div>
            )}
            <div className="image-slider-class w-[99%] object-cover">
              {isLoading ? (
                <div className={`${classes.loader} absolute h-20`} />
              ) : (
                <Swiper
                  // install Swiper modules
                  modules={[Pagination, A11y, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={2}
                  autoplay={true}
                  onSwiper={(swiper) => console.log()}
                  onSlideChange={() => console.log('')}
                  className="w-full "
                >
                  {product?.imageUrls &&
                    product.imageUrls.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Link
                          href={'#'}
                          className="slider-link cursor-pointer"
                          onClick={() => setImgPreview(image)}
                        >
                          <Image
                            src={image ? image : ''}
                            alt="product image"
                            className="rounded-lg object-cover w-full h-[200px] p-1"
                            width={500}
                            height={500}
                          />
                        </Link>
                      </SwiperSlide>
                    ))}
                  ...
                </Swiper>
              )}
            </div>
          </div>
          <div className="description-class w-1/2 sm:w-full h-full ">
            <div className="flex flex-col items-start justify-start pt-10 sm:pt-2 gap-y-10 w-[90%] md:w-full p-5 pb-10">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-3xl font-semibold text-white font-headerFont">
                  {product?.title}
                </p>
                <div className="text-xl font-semibold">
                  <div className="stars flex items-center gap-x-1">
                    {starRating(product?.rating)}
                    <span className="font-medium text-xl">
                      {product?.rating}
                    </span>
                  </div>

                  {product?.promoPrice ? (
                    <div>
                      <div className="border-[1px] border-yellow-600 w-fit py-1 px-4 rounded-full text-xs text-yellow-500">
                        <p>
                          {calculatePercentage(
                            product?.deposit,
                            product?.promoPrice
                          )}
                          % menos
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <p className="line-through text-sm text-white font-bodyFont">
                          <FormatedPrice amount={product?.promoPrice} />
                        </p>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  <p className="font-semibold text-4xl text-white font-bodyFont">
                    <FormatedPrice amount={product?.deposit} />
                  </p>
                  <p className="text-xl text-white font-bodyFont">
                    <FormatedPrice amount={product?.price} />
                  </p>
                  <p className="text-xs font-normal text-yellow-600">
                    Deposito inicial
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-white font-bodyFont description-class"
              >
                {product?.description ? product?.description : ''}
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-sm text-lightText flex flex-col"
              >
                <span>
                  SKU:{' '}
                  <span className="text-white font-bodyFont">
                    {product?._id}
                  </span>
                </span>
                <span>
                  Categoría:{' '}
                  <span className="ttext-white font-bodyFont">
                    {product?.category}
                  </span>
                </span>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center cursor-pointer group"
              >
                {/* add to cart button */}
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gold-gradient flex flex-row items-center justify-between px-4 py-2 text-sm gap-x-4 tracking-wide rounded-full text-black hover:bg-darkText  duration-500"
                  onClick={() =>
                    dispatch(addToCart(product)) &&
                    toast.success(
                      `${product?.title.substring(
                        0,
                        15
                      )}... se agrego al carrito`,
                      {
                        position: toast.POSITION.TOP_CENTER,
                        className: 'foo-bar',
                        theme: 'dark',
                        transition: Bounce,
                      }
                    ) &&
                    router.push('/cart')
                  }
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
      </div>
    </div>
  );
};

export default ProductDetails;
