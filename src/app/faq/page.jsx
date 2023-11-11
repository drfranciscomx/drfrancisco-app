'use client';
import FaqComponent from '@/components/sections/FaqComponent';
import PageTransition from '@/components/transitions/PageTransition';
import { ToastContainer } from 'react-toastify';

const index = () => {
  return (
    <>
      <div className="faq-wrapper h-full">
        <PageTransition />
        <FaqComponent />
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
};

export default index;
