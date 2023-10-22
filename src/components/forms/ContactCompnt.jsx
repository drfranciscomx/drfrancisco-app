import React from 'react'
import ContactForm from './ContactForm'

const ContactCompnt = (credentials) => {
  const templateid = credentials.templateID
  const serviceid = credentials.serviceID
  const publickey = credentials.publicKEY
  return (
    <div className='flex flex-row md:flex-col '>
      <div className='w-full z-10'>
          <div className=' pb-20'>
            
            <ContactForm  templateID={templateid} serviceID={serviceid} publicKEY={publickey} />
          </div>
      </div>
     
    </div>
  )
}

export default ContactCompnt