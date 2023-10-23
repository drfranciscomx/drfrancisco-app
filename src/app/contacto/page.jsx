import ContactCompnt from '@/components/forms/ContactCompnt'
import TeamComponemt from '@/components/team/TeamComponent'
import PageTransition from '@/components/transitions/PageTransition'
import { ToastContainer } from 'react-toastify'



const ContactPage = () => {
  
  return (
    
    <div className='h-full'>
    <PageTransition />
        <TeamComponemt  />
        <ContactCompnt />
        <ToastContainer />
    </div>
  )
}


export default ContactPage