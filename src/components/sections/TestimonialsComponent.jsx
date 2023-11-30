'use client';
import { SwiperSlide, Swiper } from 'swiper/react';
import { testimonials } from '@/data/testimoniolsdata';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import Image from 'next/image';

import TestimonialsSlider from '../sliders/TestimonialsSlider';
import BeforeAndAfter from '../ctas/BeforeAndAfter';

const TestimonialsComponent = () => {
  return (
    <section className="rounded-3xs bg-sendblack flex flex-col items-center justify-start relative text-left text-lg text-silver-100">
      <div className="container mt-12 items-center justify-center">
        <BeforeAndAfter />
        <TestimonialsSlider />
        <div className="mb-20" />
      </div>
    </section>
  );
};

export default TestimonialsComponent;
