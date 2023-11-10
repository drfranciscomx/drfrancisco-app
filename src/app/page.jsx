'use client';
import ViewResultsComponent from '@/components/ctas/ViewResultsComponent';
import HeroComponent from '@/components/hero/HeroComponent';
import FaqComponent from '@/components/sections/FaqComponent';
import PageTransition from '@/components/transitions/PageTransition';
import { ToastContainer } from 'react-toastify';

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
