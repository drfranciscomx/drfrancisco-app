import ViewResultsComponent from '@/components/ctas/ViewResultsComponent';
import TestimonialsComponent from '@/components/sections/TestimonialsComponent';
import PageTransition from "@/components/transitions/PageTransition";
import ContainerComponent from '@/components/containers/ContainerComponent';

const index = () => {
  return (
    <>

    <PageTransition />
        <ViewResultsComponent/>
        <TestimonialsComponent/>
    </>
  )
}

export default index