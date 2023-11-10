'use client';
import BeforeAndAfter from '@/components/ctas/BeforeAndAfter';
import ViewResultsComponent from '@/components/ctas/ViewResultsComponent';
import HeroComponent from '@/components/hero/HeroComponent';
import FaqComponent from '@/components/sections/FaqComponent';
import TestimonialsComponent from '@/components/sections/TestimonialsComponent';
import TestimonialsSlider from '@/components/sliders/TestimonialsSlider';
import PageTransition from '@/components/transitions/PageTransition';
import TagManager from 'react-gtm-module';
import { ToastContainer } from 'react-toastify';

const tagManagerArgs = {
  gtmId: 'GTM-N4382WJN',
};

TagManager.initialize(tagManagerArgs);
TagManager.dataLayer({
  dataLayer: {
    event: 'pageview',
    path: '/',
  },
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 md:p-10 sm:p-0">
      <PageTransition />
      <HeroComponent />
      <ViewResultsComponent />
      <FaqComponent />
      <ToastContainer />
    </main>
  );
}
