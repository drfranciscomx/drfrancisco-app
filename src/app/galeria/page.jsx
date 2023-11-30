import ImageGallery from '@/components/galleries/ImageGallery';
import React from 'react';
import AnimatedText from '@/components/texts/AnimatedText';

const GalleryPage = () => {
  return (
    <div className="py-20">
      <AnimatedText
        text={`Explora nuestra galería de pacientes `}
        text2={`Satisfechos`}
        className="  font-headerFont text-white text-center text-4xl"
      />
      <AnimatedText
        descrp="Contamos con una amplia gama de procedimientos estéticos."
        className=" text-5xl font-bodyFont text-white text-center md:text-2xl"
      />
      <ImageGallery />
    </div>
  );
};

export default GalleryPage;
